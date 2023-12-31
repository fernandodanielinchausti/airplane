const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    airplane_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: "Identificador de la tabla",
      field: "airplane_id"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "Nombre del avión",
      field: "name"
    }
  };
  const options = {
    timestamps: false,
    tableName: "airplane",
    comment: "",
    indexes: []
  };
  const AirplaneModel = sequelize.define("airplane_model", attributes, options);
  return AirplaneModel;
};