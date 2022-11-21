"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Mr. T",
        email: "mrt@gmail.com",
        password: "ipitythefool",
        isSpeaker: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nigel Rizzo",
        email: "nigel@rizzo.com",
        password: "1234",
        isSpeaker: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Aggio Duthuit",
        email: "aggio@duthuit.com",
        password: "1234",
        isSpeaker: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
