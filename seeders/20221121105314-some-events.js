"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("events", [
      {
        title: "Mr. T: Empower Yourself, I Pity The Fool",
        imageUrl:
          "https://www.cultofmac.com/wp-content/uploads/2013/02/iaintgettingonnoplane.jpg",
        continent: "North America",
        longitude: -90.08197,
        latitude: 29.951439,
        price: 149.99,
        rating: 4.4,
        description:
          "Mr. T gives helpful advice to adults and children throughout the event. For example, he teaches them how to understand and appreciate their origins, how to dress fashionably without purchasing of high fashion, how to control their anger, and deal with peer pressure. He also describes how to empower yourself by controlling different emotions and take action in your life. /br He speaks about his life and what he had to go through in order to make it in life. The breakthroughs, the scarifices and hardships that created the man he is today. /br This event has brought many people to be inspired and create new life or improve their own. If you attend this event it is certain you will get something out of it that will alter your life forever. /br Also you get to hear him say his cool catchphrases such as <i>I Pity The Fool</i> and more!",
        date: "2022-12-10 18:23:27.82+00",
        capacity: 2000,
        speakerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("events", null, {});
  },
};
