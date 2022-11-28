"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("events", "place", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("events", "location", {
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("events", "place");
    await queryInterface.removeColumn("events", "location");
  },
};
