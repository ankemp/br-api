const _ = require('lodash');
const { getByStackableId } = require('./data/stackables');
const { getByDevName } = require('./data/gameplay');
const { getChampionById } = require('./data/champions');
const { getMapById } = require('./data/maps');

function _mapIncluded(_included, { type, id }) {
  let include = _included.find(i => i.id === id);
  if (!_.isUndefined(include)) {
    include = _flattenAttributes(include, type);
  }
  if (!_.isUndefined(include) && !_.isUndefined(include.relationships) && !!_.keys(include.relationships).length) {
    _.forEach(include.relationships, (relationship, key) => {
      if (!!relationship.data) {
        if (_.isArray(relationship.data) && !!relationship.data.length) {
          include[`${key}`] = _.map(relationship.data, d => _mapIncluded(_included, d));
        } else {
          _.set(include, [`${key}`], _mapIncluded(_included, relationship.data));
        }
      }
    })
    include = _.omit(include, 'relationships');
  }
  return include;
}

function flattenAarray(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flattenAarray(toFlatten) : toFlatten);
  }, []);
}

function _flattenAttributes(data, type) {
  return _.transform(data, (obj, value, key) => {
    switch (key) {
      case 'attributes':
        obj = _.merge(obj, _flattenAttributes(value, type));
        break;

      case 'stats':
        if (type === 'participant' || type === 'player') {
          obj['stats'] = value;
        } else if (type === 'match' && key === 'stats') {
          obj['matchType'] = value.type;
          obj['mapId'] = value.mapID;
          obj['map'] = getMapById(value.mapID);
        } else {
          obj = _.merge(obj, _flattenAttributes(value, type));
        }
        break;
      case 'tags':
        console.log(value);
        break;

      case 'createdAt':
        obj['createdAt'] = new Date(value);
        break;

      case 'actor':
        obj['championId'] = value;
        obj['champion'] = getChampionById(value);
        break;

      case 'won':
        obj['won'] = value === 'true' ? true : false
        break;

      case 'titleId':
      case 'type':
        //  Die.
        break;

      default:
        obj[key] = value;
        break;
    }
  }, {});
}

function _mapMatch({ data, included }) {
  const _included = _(included);
  let match = _flattenAttributes(data, 'match');
  if (data.relationships) {
    for (const [name, relData] of _.toPairs(data.relationships)) {
      if (_.isArray(relData.data)) {
        _.set(match, [`${name}`], _.map(relData.data, d => _mapIncluded(_included, d)))
      } else {
        _.set(match, [`${name}`], relData.data);
      }
      match = _.omit(match, 'relationships');
    }
    _.set(match, ['telemetry'], _.find(match.assets, { name: 'telemetry' }).URL);
  }
  return JSON.parse(JSON.stringify(match));
}

function _mapMatches({ data, included }) {
  return _.map(data, d => {
    return _mapMatch({ data: d, included })
  })
}

function _mapPlayer({ data, included }) {
  let player = _flattenAttributes(data, 'player');
  const champions = new Set();

  player.stats = _.reduce(player.stats, (acc, value, key) => {
    const stack = getByStackableId(key);
    if (stack) {
      if (stack.DevName === stack.StackableRangeName) {
        _.set(acc, _.camelCase(stack.DevName), value);
      } else {
        if (champions.has(stack.DevName)) {
          const obj = _.find(acc.champions, { localizedName: stack.LocalizedName })
          _.set(obj, _.camelCase(stack.StackableRangeName), value);
        } else {
          champions.add(stack.DevName);
          const gameplay = getByDevName(stack.DevName);
          if (gameplay) {
            let obj = _.stubObject();
            obj.localizedName = stack.LocalizedName
            obj.champion = getChampionById(gameplay.typeID);
            acc.champions = acc.champions || [];
            _.set(obj, _.camelCase(stack.StackableRangeName), value);
            acc.champions.push(obj);
          }
        }
      }
    }
    return acc;
  }, {});

  return JSON.parse(JSON.stringify(player));
}

function _mapPlayers({ data, included }) {
  const players = _.map(data, player => {
    return _mapPlayer({ data: player, included });
  });
  return JSON.parse(JSON.stringify(players));
}

function _mapTeam({ data, included }) {
  let team = _flattenAttributes(data, 'team');
  switch (team.members.length) {
    case 1:
      _.set(team, 'teamType', 'solo');
      break;
    case 2:
      _.set(team, 'teamType', '2v2');
      break;
    case 3:
      _.set(team, 'teamType', '3v3');
      break;

    default:
      // wut
      break;
  }
  team = _.omit(team, 'relationships');
  return JSON.parse(JSON.stringify(team));
}

function _mapTeams({ data, included }) {
  const teams = _.map(data, team => {
    team = _mapTeam({ data: team, included });
    if (team.teamType !== 'solo' && (!team.wins && !team.losses)) {
      team = undefined;
    }
    return team;
  }).filter(Boolean);
  return JSON.parse(JSON.stringify(teams));
}

function _mapTeamMembers({ data }) {
  const teamMembers = _.map(data, team => {
    team = _.map(team.members,member=>{
      return {teamId:team.id, playerId:member};
    });
    return team;
  }).filter(Boolean);
  const mergedTeamMembers = flattenAarray(teamMembers);
  return JSON.parse(JSON.stringify(mergedTeamMembers));
}

module.exports = {
  match: _mapMatch,
  matches: _mapMatches,
  player: _mapPlayer,
  players: _mapPlayers,
  team: _mapTeam,
  teams: _mapTeams,
  teamMembers: _mapTeamMembers,
}
