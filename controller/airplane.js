const db = require("../models");
const { airplaneService } = require("../service");

const getAll = async () => {
  return await airplaneService.getAirplane();
};

module.exports = {
  getAll,
};
