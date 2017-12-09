'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('maps', [
      {
        id: 'D57BBC373C35B426E93CB844B3C67C12',
        name: 'Mount Araz - Day',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'AB201E3B9454141FE9C9352CC296AD61',
        name: 'Mount Araz - Night',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '02EF7F035729241EF81A9BC09463DD00',
        name: 'Orman Temple - Day',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3482480FED2AC482AA7DA471C1990591',
        name: 'Orman Temple - Night',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '80D7970B6650D41108D71083ECF0E49E',
        name: 'Sky Ring - Day',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '417DE573937D74E39BF40EB6CF82670B',
        name: 'Sky Ring - Night',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '975402A5539C6491789B36DC4D26D566',
        name: 'Blackstone Arena - Day',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '319DDC57E70174B6C85EF137BAF34E9E',
        name: 'Blackstone Arena - Night',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '1C67FA3426A324D39BED64501C46C1E6',
        name: 'Dragon Garden - Day',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'FFFFE4774561141D49B46892B5CBACFA',
        name: 'Dragon Garden - Night',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('maps', null, {});
  }
};
