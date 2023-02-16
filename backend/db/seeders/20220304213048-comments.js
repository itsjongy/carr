'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Comments';     // define table name in options object
    return queryInterface.bulkInsert(options, [
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
    options.tableName = 'Comments'; // define table name in options object
    return queryInterface.bulkDelete(options);
  }
};
