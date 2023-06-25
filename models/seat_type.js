const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    seat_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: "Identificador de la tabla",
      field: "seat_type_id"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "Nombre del tipo de asiento",
      field: "name"
    }
  };
  const options = {
    tableName: "seat_type",
    comment: "",
    indexes: []
  };
  const SeatTypeModel = sequelize.define("seat_type_model", attributes, options);
  return SeatTypeModel;
};