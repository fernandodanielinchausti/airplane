const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    passenger_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: "Identificador de la tabla",
      field: "passenger_id"
    },
    dni: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "Número de identificación del pasajero",
      field: "dni"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "Nombre completo del pasajero",
      field: "name"
    },
    age: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "Edad del pasajero",
      field: "age"
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "País del pasajero",
      field: "country"
    }
  };
  const options = {
    tableName: "passenger",
    comment: "",
    indexes: []
  };
  const PassengerModel = sequelize.define("passenger_model", attributes, options);
  return PassengerModel;
};