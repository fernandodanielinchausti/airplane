const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    boarding_pass_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: "Identificador de la tabla",
      field: "boarding_pass_id"
    },
    purchase_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "Id de la compra",
      field: "purchase_id",
      references: {
        key: "purchase_id",
        model: "purchase_model"
      }
    },
    passenger_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "Id del pasajero",
      field: "passenger_id",
      references: {
        key: "passenger_id",
        model: "passenger_model"
      }
    },
    seat_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "Id del tipo de asiento",
      field: "seat_type_id",
      references: {
        key: "seat_type_id",
        model: "seat_type_model"
      }
    },
    seat_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "Id del asiento",
      field: "seat_id",
      references: {
        key: "seat_id",
        model: "seat_model"
      }
    },
    flight_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "Id del vuelo",
      field: "flight_id",
      references: {
        key: "flight_id",
        model: "flight_model"
      }
    }
  };
  const options = {
    tableName: "boarding_pass",
    comment: "",
    indexes: [{
      name: "purchase_id_bp",
      unique: false,
      type: "BTREE",
      fields: ["purchase_id"]
    }, {
      name: "passenger_id_bp",
      unique: false,
      type: "BTREE",
      fields: ["passenger_id"]
    }, {
      name: "seat_type_id_bp",
      unique: false,
      type: "BTREE",
      fields: ["seat_type_id"]
    }, {
      name: "flight_id_bp",
      unique: false,
      type: "BTREE",
      fields: ["flight_id"]
    }, {
      name: "seat_id_bp",
      unique: false,
      type: "BTREE",
      fields: ["seat_id"]
    }]
  };
  const BoardingPassModel = sequelize.define("boarding_pass_model", attributes, options);
  return BoardingPassModel;
};