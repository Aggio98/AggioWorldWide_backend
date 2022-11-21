"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("profiles", [
      {
        age: 70,
        imageUrl:
          "https://thumbnails.aaehq.com/t_face_s270/https://speakerdata2.s3.amazonaws.com/photo/image/910975/mr-t-2000.jpg",
        description:
          "Mr. T is a keynote speaker and industry expert who speaks on a wide range of topics including Health, Military and World Affairs. The estimated speaking fee range to book Mr. T for live events is $100,000 - $200,000. /br Mr. T is an american actor, bodyguard, television personality, and retired professional wrestler, known for his roles as B. A. Baracus in the 1980s television series <i>The A-Team</i> and as boxer Clubber Lang in the 1982 film <i>Rocky III</i>. /br Mr. T is known for his distinctive hairstyle inspired by Mandinka warriors in West Africa, his gold jewelry, and his tough-guy image. In 2006, he stared in I Pity the Fool, a reality show shown on TV Land; the title of the show comes from the famous catchphrase used by his character, <i>Clubber Lang</i>.",
        speakerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        dateOfBirth: "May 21, 1952",
        occupation: "Actor, wrestler, television personality",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("profiles", null, {});
  },
};
