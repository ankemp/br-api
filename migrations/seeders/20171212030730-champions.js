'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('champions', [
      {
        id: '1318732017',
        name: 'Rook',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '550061327',
        name: 'Ruh Kaan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '763360732',
        name: 'Shifu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '1422481252',
        name: 'Bakko',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '1749055646',
        name: 'Raigon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '1606711539',
        name: 'Freya',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '1208445212',
        name: 'Croak',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '1463164578',
        name: 'Thorn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '65687534',
        name: 'Jade',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '1',
        name: 'Ashka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '369797039',
        name: 'Varesh',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '1377055301',
        name: 'Ezmo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '39373466',
        name: 'Jumong',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '842211418',
        name: 'Iva',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '870711570',
        name: 'Destiny',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '154382530',
        name: 'Taya',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '467463015',
        name: 'Lucie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '259914044',
        name: 'Sirius',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '1134478706',
        name: 'Poloma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '543520739',
        name: 'Blossom',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '1649551456',
        name: 'Pestilus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '1908945514',
        name: 'Oldur',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '44962063',
        name: 'Pearl',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '613085868',
        name: 'Alysia',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('champions', null, {});
  }
};
