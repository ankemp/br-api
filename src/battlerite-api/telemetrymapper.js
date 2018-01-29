const _ = require('lodash');
const { getByTypeID } = require('./data/gameplay');
const { getChampionById } = require('./data/champions');

module.exports = function (telemetry) {
  const _telemetry = _(telemetry);
  return _telemetry
    .map(t => {
      const { character } = t.dataObject;
      _.set(t.dataObject, 'character', getChampionById(character));
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
}

function _mapRoundSpell(roundSpells) {
  const _roundSpells = _(roundSpells);
  return _roundSpells
    .map(s => {
      const { character, typeId, sourceTypeId } = s.dataObject;
      const champion = getByTypeID(+character.id);
      _.set(s.dataObject, 'type', champion.abilities.find(a => a.typeID === typeId));
      _.set(s.dataObject, 'source', champion.abilities.find(a => a.typeID === sourceTypeId));
      return { cursor: s.cursor, ...s.dataObject };
    })
    .sortBy('cursor')
    .groupBy('scoreType')
}

function _mapRoundEvent(roundEvents) {
  const _roundEvents = _(roundEvents);
  return _roundEvents
    .map(e => {
      return { cursor: e.cursor, ...e.dataObject };
    })
}

function _mapBattlerites(battlerites) {
  const _battlerites = _(battlerites);
  return _battlerites
    .map(t => {
      const { character, battleriteType } = t.dataObject;
      const champion = getByTypeID(+character.id);
      t.dataObject.battlerite = champion.battlerites.find(({ typeID }) => typeID === battleriteType);
      return { cursor: t.cursor, ...t.dataObject };
    })
    .map(t => _.pick(t, ['cursor', 'time', 'battlerite', 'loadoutType', 'userID', 'character']))
    .groupBy('userID');
}

function _mapRoundFinishedEvent(rounds) {
  const _rounds = _(rounds);
  return _rounds
    .map(r => {
      _.set(r.dataObject, 'stats', r.dataObject.playerStats)
      _.set(r.dataObject, 'duration', r.dataObject.roundLength);
      _.set(r.dataObject, 'ordinal', r.dataObject.round);
      return { cursor: r.cursor, ...r.dataObject };
    })
    .map(r => _.pick(r, ['cursor', 'time', 'ordinal', 'duration', 'winningTeam', 'stats']))
    .sortBy('ordinal')
}

function _mapTeamUpdate(teams) {
  const _teams = _(teams);
  return _teams
    .map(t => {

      return { cursor: t.cursor, ...t.dataObject };
    });
}
