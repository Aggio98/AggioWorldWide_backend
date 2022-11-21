"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("profiles", "dateOfBirth", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("profiles", "occupation", {
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("profiles", "dateOfBirth", {});
    await queryInterface.removeColumn("profiles", "occupation", {});
  },
};
