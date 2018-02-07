const _ = require('lodash');
const moment = require('moment');
const { getByTypeID } = require('./data/gameplay');
const { getChampionById } = require('./data/champions');

module.exports = function (telemetry) {
  const _telemetry = _(telemetry);
  return _telemetry
    .chain()
    .map(t => {
      const { character } = t.dataObject;
      if (!!character) {
        _.set(t.dataObject, 'character', getChampionById(character));
      }
      return t;
    })
    .groupBy('type')
    .reduce((obj, t, key) => {
      switch (key) {
        case 'Structures.UserRoundSpell': {
          // _.set(obj, 'roundSpell', _mapRoundSpell(t));
          break;
        }

        case 'Structures.RoundEvent': {
          // _.set(obj, 'roundEvent', _mapRoundEvent(t));
        }

        case 'Structures.BattleritePickEvent': {
          _.set(obj, 'battlerites', _mapBattlerites(t));
          break;
        }

        case 'Structures.RoundFinishedEvent': {
          _.set(obj, 'roundStats', _mapRoundFinishedEvent(t));
          break;
        }

        case 'com.stunlock.battlerite.team.TeamUpdateEvent': {
          _.set(obj, 'teamUpdate', _mapTeamUpdate(t));
        }

        case 'Structures.MatchFinishedEvent': {
          _.set(obj, 'matchFinishedEvent', t);
        }

        case 'com.stunlock.service.matchmaking.avro.QueueEvent':
        case 'Structures.DeathEvent':
        case 'Structures.ServerShutdown':
        case 'Structures.MatchStart':
        case 'Structures.MatchReservedUser': {
          // Landfill
          break;
        }

        default: {
          _.set(obj, key.replace(/\./g, ''), t);
          break;
        }
      }
      return obj;
    }, {})
    .pick(['roundSpell', 'roundEvent', 'battlerites', 'roundStats', 'teamUpdate', 'matchFinishedEvent'])
}

function _mapRoundSpell(roundSpells) {
  const _roundSpells = _(roundSpells);
  return _roundSpells
    .chain()
    .map(s => {
      const { character, typeId, sourceTypeId } = s.dataObject;
      const champion = getByTypeID(+character.id);
      _.set(s.dataObject, 'type', champion.abilities.find(a => a.typeID === typeId));
      _.set(s.dataObject, 'source', champion.abilities.find(a => a.typeID === sourceTypeId));
      return { cursor: s.cursor, ...s.dataObject };
    })
    .sortBy('cursor')
    .groupBy('scoreType')
    .value();
}

function _mapRoundEvent(roundEvents) {
  const _roundEvents = _(roundEvents);
  return _roundEvents
    .chain()
    .map(re => {
      return { cursor: re.cursor, ...re.dataObject };
    })
    .value();
}

function _mapBattlerites(battlerites) {
  const _battlerites = _(battlerites);
  return _battlerites
    .chain()
    .map(t => {
      const { character, battleriteType } = t.dataObject;
      const champion = getByTypeID(+character.id);
      t.dataObject.battlerite = champion.battlerites.find(({ typeID }) => typeID === battleriteType);
      return { cursor: t.cursor, ...t.dataObject };
    })
    .map(t => _.pick(t, ['cursor', 'time', 'battlerite', 'loadoutType', 'userID', 'character']))
    .groupBy('userID')
    .value();
}

function _mapRoundFinishedEvent(rounds) {
  const _rounds = _(rounds);
  return _rounds
    .chain()
    .map(r => {
      return { cursor: r.cursor, ...r.dataObject };
    })
    .map(r => {
      const mvp = _.maxBy(_.filter(r.playerStats, { deaths: 0 }), 'score');
      r.playerStats = _.map(r.playerStats, player => {
        if (player.userID === mvp.userID) {
          _.set(player, 'mvp', true);
        } else {
          _.set(player, 'mvp', false);
        }
        return player;
      });
      return r;
    })
    .map(r => {
      const endTime = moment(r.time);
      const startTime = endTime.subtract('seconds', r.duration);
      _.set(r, 'stats', r.playerStats);
      _.set(r, 'duration', r.roundLength);
      _.set(r, 'ordinal', r.round);
      _.set(r, 'startTime', startTime.toISOString());
      _.set(r, 'endTime', endTime.toISOString());
      return r;
    })
    .map(r => _.pick(r, ['cursor', 'startTime', 'endTime', 'ordinal', 'duration', 'winningTeam', 'stats']))
    .sortBy('ordinal')
    .value();
}

function _mapTeamUpdate(teams) {
  const _teams = _(teams);
  return _teams
    .chain()
    .map(t => {
      return { cursor: t.cursor, ...t.dataObject };
    })
    .map(t => {
      const updateData = _.omit(t, ['userIDs']);
      return t.userIDs
        .filter(userID => userID !== 0)
        .map(userID => {
          return _.assign(updateData, { userID });
        })
    })
    .flatten()
    .value();
}
