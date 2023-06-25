const { airplane_model } = require("../models");

const getAirplane = async () => {
  return await airplane_model.findAll();
};

module.exports = {
  getAirplane,
};
