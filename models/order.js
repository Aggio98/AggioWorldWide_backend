"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orderTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orderTicket.belongsTo(models.event);
      orderTicket.belongsTo(models.user);
    }
  }
  orderTicket.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      // userId: DataTypes.INTEGER,
      // eventId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "orderTicket",
    }
  );
  return orderTicket;
};
