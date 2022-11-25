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
          "Mr. T is a keynote speaker and industry expert who speaks on a wide range of topics including Health, Military and World Affairs. The estimated speaking fee range to book Mr. T for live events is $100,000 - $200,000. /br Mr. T is an american actor, bodyguard, television personality, and retired professional wrestler, known for his roles as B. A. Baracus in the 1980s television series The A-Team and as boxer Clubber Lang in the 1982 film <i>Rocky III</i>. /br Mr. T is known for his distinctive hairstyle inspired by Mandinka warriors in West Africa, his gold jewelry, and his tough-guy image. In 2006, he stared in I Pity the Fool, a reality show shown on TV Land; the title of the show comes from the famous catchphrase used by his character, Clubber Lang.",
        speakerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        dateOfBirth: "May 21, 1952",
        occupation: "Actor, Wrestler, Television Personality",
      },
      {
        age: 48,
        imageUrl:
          "https://thumbnails.aaehq.com/t_face_s270/https://speakerdata2.s3.amazonaws.com/photo/image/910975/mr-t-2000.jpg",
        description:
          "Bear Grylls is a keynote speaker and a former British 21 SAS soldier, No. 1 best-selling author, producer and is widely known for his television series Man Vs. Wild. Alongside hosting other wildness survival television series in the UK and US, he is an honorary Colonel to the Royal Marine Commandos and is the youngest-ever Chief Scout to 40 million worldwide Scouts.",
        speakerId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        dateOfBirth: "June 7, 1974",
        occupation:
          "Adventurer, Author, Television Speaker, Motivational Speaker",
      },
      {
        age: 62,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/5/5e/Tony_Robbins.jpg",
        description:
          "Anthony Jay Robbins is an American author, coach, speaker, and philanthropist. He is known for his infomercials, seminars, and self-help books including the books Unlimited Power and Awaken the Giant Within.",
        speakerId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        dateOfBirth: "February 29, 1960",
        occupation: "Motivational Speaker, Author",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("profiles", null, {});
  },
};
