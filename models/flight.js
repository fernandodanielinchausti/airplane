const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    flight_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: "Identificador de la tabla",
      field: "flight_id"
    },
    takeoff_date_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "Fecha y hora del despegue",
      field: "takeoff_date_time"
    },
    takeoff_airport: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "Aeropuerto de despegue",
      field: "takeoff_airport"
    },
    landing_date_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "Fecha y hora de aterrizaje",
      field: "landing_date_time"
    },
    landing_airport: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "Aeropuerto de aterrizaje",
      field: "landing_airport"
    },
    airplane_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "Id del avión",
      field: "airplane_id",
      references: {
        key: "airplane_id",
        model: "airplane_model"
      }
    }
  };
  const options = {
    tableName: "flight",
    comment: "",
    indexes: [{
      name: "airplane_id_fl",
      unique: false,
      type: "BTREE",
      fields: ["airplane_id"]
    }]
  };
  const FlightModel = sequelize.define("flight_model", attributes, options);
  return FlightModel;
};