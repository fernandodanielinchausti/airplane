const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    seat_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: "Identificador de la tabla",
      field: "seat_id"
    },
    seat_column: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "Columna del asiento",
      field: "seat_column"
    },
    seat_row: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "Fila del asiento",
      field: "seat_row"
    },
    seat_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "Id del tipo de asiento {FK}",
      field: "seat_type_id",
      references: {
        key: "seat_type_id",
        model: "seat_type_model"
      }
    },
    airplane_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "Id del avión al que pertenece el asiento",
      field: "airplane_id",
      references: {
        key: "airplane_id",
        model: "airplane_model"
      }
    }
  };
  const options = {
    tableName: "seat",
    comment: "",
    indexes: [{
      name: "airplane_id_se",
      unique: false,
      type: "BTREE",
      fields: ["airplane_id"]
    }, {
      name: "seat_type_id_se",
      unique: false,
      type: "BTREE",
      fields: ["seat_type_id"]
    }]
  };
  const SeatModel = sequelize.define("seat_model", attributes, options);
  return SeatModel;
};