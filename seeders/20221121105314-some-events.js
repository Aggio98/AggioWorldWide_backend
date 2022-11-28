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
          "Mr. T gives helpful advice to adults and children throughout the event. He speaks on the subject about how to understand and appreciate who you are, how to dress fashionably without purchasing of high fashion, how to control your anger, and deal with peer pressure.",
        date: "2022-12-10 18:23:27.82+00",
        capacity: 2000,
        speakerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        place: "Caesars Superdome",
        location: "New Orleans, United States",
      },
      {
        title: "Bear Grylls: Surviving in Harsh Conditions",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTc4OTcwNjAxNV5BMl5BanBnXkFtZTcwMTA5MDA1Mg@@._V1_.jpg",
        continent: "Europe",
        longitude: 4.9371732,
        latitude: 52.3134245,
        price: 469.99,
        rating: 3.8,
        description:
          "Bear Grylls aims to guide his audience on a journey to understand how to overcome challenges and adversity and to learn from failures. Sharing his stories of resilience, courage and drive to never give up, Grylls empowers his audience to find their own adventures. He can deliver speeches to corporate engagements, conferences, events and award ceremonies, presenting awards, bespoke events and intimate talks to a smaller audience.",
        date: "2022-12-20 18:23:27.82+00",
        capacity: 1000,
        speakerId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        place: "Ziggo Dome",
        location: "Amsterdam, Netherlands",
      },
      {
        title: "Tony Robbins: How to create the life you desire",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tony_Robbins.jpg/440px-Tony_Robbins.jpg",
        continent: "Asia",
        longitude: 35.8951,
        latitude: 139.6307,
        price: 248.99,
        rating: 4.9,
        description:
          "Tony Robbins aims to have his audience to overcome any fear, breakthrough any limitation and create the life you've always wanted - but haven't yet reached - your journey starts here. He present on what people need to do now is very important to determine whether we just “survive” the rough times ahead, or whether we thrive despite them. The decisions you make today, determine your tomorrow. We want you to thrive – and there’s no investment as sure as the investment you make in YOURSELF and your future. ",
        date: "2022-12-20 18:23:27.82+00",
        capacity: 3000,
        speakerId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        place: "Saitama Super Arena",
        location: "Saitama, Japan",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("events", null, {});
  },
};
