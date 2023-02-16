'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Images';     // define table name in options object
    return queryInterface.bulkInsert(options, [
      {
        userId: 2,
        imageUrl: 'https://pbs.twimg.com/ext_tw_video_thumb/1486443897458937868/pu/img/S24DxTyGijP5XbsH?format=jpg&name=large',
        content: 'i luv hello kitty :3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        imageUrl: 'https://cdn.shopify.com/s/files/1/0488/2281/2828/products/image_7af65661-598c-40da-a184-279527566935.jpg?v=1602353289',
        content: 'hehe who wanna be my melody >~<',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdt_RAG-S_GewUn4efPnL-iXZvqmEBd500Q&usqp=CAU',
        content: 'such a vibe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        imageUrl: 'https://www.goldkk.com/upload/20210226/6374993830651758657806336.png',
        content: 'omg i love the sanrio acnh stuff so kawaii',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        imageUrl: 'https://meccha-japan.com/175096-large_default/plush-cinnamoroll-tiger-ver-sanrio-eto-engi.jpg',
        content: 'is she going to love me if i give her this..?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        imageUrl: 'https://meccha-japan.com/173143-large_default/plush-pompompurin-nakayoshi-pair.jpg',
        content: 'i wanna get this for my boo, jongy. opinions?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'Images'; // define table name in options object
    return queryInterface.bulkDelete(options);
  }
};
