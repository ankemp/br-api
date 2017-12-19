const _ = require('lodash');
const getStackables = require('./mapping/stackables');
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

function _flattenAttributes(data, type) {
  return _.transform(data, (obj, value, key) => {
    switch (key) {
      case 'attributes':
        obj = _.merge(obj, _flattenAttributes(value, type));
        break;

      case 'stats':
        if (type === 'participant' || type === 'player') {
          obj['stats'] = value;
        } else if (type === 'match') {
          if (key === 'stats') {
            obj['matchType'] = value.type;
            obj['mapId'] = value.mapID;
          }
        } else {
          obj = _.merge(obj, _flattenAttributes(value, type));
        }
        break;

      case 'createdAt':
        obj['createdAt'] = new Date(value);
        break;

      case 'actor':
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
  _.set(match, ['map'], getMapById(match.stats.mapID));
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
  const player = _flattenAttributes(data, 'player');

  const stackableList = _(getStackables());

  Object.keys(player.stats).forEach(function(key) {
    const val = player.stats[key];
    let stack = stackableList.find(f=>f.StackableId == key);
    if(stack)
    {
      player.stats[key] = undefined;
      _.set(stack,'value',val)
      _.set(player, stack.DevName,stack);
    }
  });
  return JSON.parse(JSON.stringify(player));
}

function _mapPlayers({ data, included }) {
  const players = _.map(data, player => {
    return _flattenAttributes(player)
  });
  return JSON.parse(JSON.stringify(players));
}

module.exports = {
  match: _mapMatch,
  matches: _mapMatches,
  player: _mapPlayer,
  players: _mapPlayers
}
