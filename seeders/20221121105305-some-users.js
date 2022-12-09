"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Mr. T",
        email: "mrt@gmail.com",
        password: bcrypt.hashSync("ipitythefool", 10),
        isSpeaker: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nigel Rizzo",
        email: "nigel@rizzo.com",
        password: bcrypt.hashSync("1234", 10),
        isSpeaker: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Aggio Duthuit",
        email: "aggio@duthuit.com",
        password: bcrypt.hashSync("1234", 10),
        isSpeaker: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bear Grylls",
        email: "bear@grylls.com",
        password: bcrypt.hashSync("adventurer", 10),
        isSpeaker: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tony Robbins",
        email: "Tony@Robins.com",
        password: bcrypt.hashSync("improvelife", 10),
        isSpeaker: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kanye West",
        email: "kanye@west.com",
        password: bcrypt.hashSync("youdontknowtheanswers", 10),
        isSpeaker: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gijsbert van Everdingen",
        email: "gijsbert@van.com",
        password: bcrypt.hashSync("socket", 10),
        isSpeaker: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
