'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        userId: 6,
        imageId: 5,
        comment: 'pls... opinions... i miss her',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        imageId: 6,
        comment: 'omg i love it hehe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        imageId: 6,
        comment: 'stop adrian belongs to me >:(',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
