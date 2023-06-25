const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    purchase_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: "Identificador de la tabla",
      field: "purchase_id"
    },
    purchase_date: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "Fecha de la compra",
      field: "purchase_date"
    }
  };
  const options = {
    tableName: "purchase",
    comment: "",
    indexes: []
  };
  const PurchaseModel = sequelize.define("purchase_model", attributes, options);
  return PurchaseModel;
};