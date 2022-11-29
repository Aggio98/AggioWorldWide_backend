"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      event.belongsTo(models.user, { foreignKey: "speakerId" });
      event.belongsToMany(models.user, {
        through: "orderTickets",
        foreignKey: "eventId",
      });
    }
  }
  event.init(
    {
      title: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      continent: DataTypes.STRING,
      longitude: DataTypes.FLOAT,
      latitude: DataTypes.FLOAT,
      price: DataTypes.FLOAT,
      rating: DataTypes.FLOAT,
      description: DataTypes.TEXT,
      date: DataTypes.DATE,
      capacity: DataTypes.INTEGER,
      speakerId: DataTypes.INTEGER,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "event",
    }
  );
  return event;
};
