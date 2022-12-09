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
        rating: 4,
        description:
          "Mr. T gives helpful advice to adults and children throughout the event. He speaks on the subject about how to understand and appreciate who you are, how to dress fashionably without purchasing of high fashion, how to control your anger, and deal with peer pressure.",
        date: "2022-12-10 17:00:00.82+00",
        capacity: 2000,
        speakerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        address: "1500 Sugar Bowl Dr, New Orleans, LA 70112, United States",
      },
      {
        title: "Bear Grylls: Surviving in Harsh Conditions",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTc4OTcwNjAxNV5BMl5BanBnXkFtZTcwMTA5MDA1Mg@@._V1_.jpg",
        continent: "Europe",
        longitude: 4.9385,
        latitude: 52.3139,
        price: 469.99,
        rating: 3,
        description:
          "Bear Grylls aims to guide his audience on a journey to understand how to overcome challenges and adversity and to learn from failures. Sharing his stories of resilience, courage and drive to never give up, Grylls empowers his audience to find their own adventures. He can deliver speeches to corporate engagements, conferences, events and award ceremonies, presenting awards, bespoke events and intimate talks to a smaller audience.",
        date: "2022-12-20 6:00:00.82+00",
        capacity: 1000,
        speakerId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        address: "De Passage 100, 1101 AX Amsterdam",
      },
      {
        title: "Tony Robbins: How to create the life you desire",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tony_Robbins.jpg/440px-Tony_Robbins.jpg",
        continent: "Asia",
        longitude: 139.6307,
        latitude: 35.8951,
        price: 248.99,
        rating: 5,
        description:
          "Tony Robbins aims to have his audience to overcome any fear, breakthrough any limitation and create the life you've always wanted - but haven't yet reached - your journey starts here. He present on what people need to do now is very important to determine whether we just “survive” the rough times ahead, or whether we thrive despite them. The decisions you make today, determine your tomorrow. We want you to thrive – and there’s no investment as sure as the investment you make in YOURSELF and your future. ",
        date: "2022-12-20 19:00:00.82+00",
        capacity: 3000,
        speakerId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        address: "8 Shintoshin, Chuo Ward, Saitama, 330-9111, Japan",
      },
      {
        title: "Kanye West: 'I want to confess, I am an Alien!'",
        imageUrl:
          "https://cdn.wionews.com/sites/default/files/inline-images/New-187.jpg",
        continent: "Europe",
        longitude: 2.294481,
        latitude: 48.858372,
        price: 999.99,
        rating: 1,
        description:
          "Kanye West shows off his new collection of clothes and shoes. Moreover, he finally shows that he has been an Alien all along and have been calling his fellow martians from Planet Kanye.",
        date: "2022-12-31 23:00:00.82+00",
        capacity: 2000,
        speakerId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
        address: "Champ de Mars, 5 Av. Anatole France, 75007 Paris, France",
      },
      {
        title:
          "Gijsbert van Everdingen: Emphasizing the Connectivity of Socket.io",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
        continent: "Europe",
        longitude: 4.8413491,
        latitude: 52.3557669,
        price: 696.96,
        rating: 5,
        description:
          "Learning with a new teacher representing class 62 of Codaisseur named Gijsbert van Everdingen. He is the new teacher of Tech Mongers and wants to show off his skills as a socket user and teach Socket.io",
        date: "2022-12-16 17:00:00.82+00",
        capacity: 50,
        speakerId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
        address: "Kon. Wilhelminaplein 1 1062 HG Amsterdam",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("events", null, {});
  },
};
