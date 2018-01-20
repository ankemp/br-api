const _ = require('lodash');
const { getByStackableId } = require('./data/stackables');
const { getByDevName, getByTypeID } = require('./data/gameplay');
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
        case 'Structures.BattleritePickEvent': {
          _.set(obj, 'battlerites', _mapBattlerites(t));
        }
      }
      return obj;
    }, {})
}


function _mapBattlerites(battlerites) {
  const _battlerites = _(battlerites);
  return _battlerites
    .map(t => {
      const { character, battleriteType } = t.dataObject;
      const champion = getByTypeID(+character.id);
      t.dataObject.battlerite = champion.battlerites.find(({ typeID }) => typeID === battleriteType);
      return t.dataObject;
    })
    .map(t => _.pick(t, ['time', 'battlerite', 'loadoutType', 'userID', 'character']))
    .groupBy('userID')
}
