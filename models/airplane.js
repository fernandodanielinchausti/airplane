"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    static associate(models) {
      // define association here
    }
  }

  Airplane.init(
    {
      airplane_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: "airplane",
      timestamps: false,
    }
  );

  return Airplane;
};
