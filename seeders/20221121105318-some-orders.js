"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("orderTickets", [
      {
        name: "Nigel Rizzo",
        email: "nigel@rizzo.com",
        userId: 2,
        eventId: 1,
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Aggio Duthuit",
        email: "aggio@duthuit.com",
        userId: 3,
        eventId: 1,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("orderTickets", null, {});
  },
};
