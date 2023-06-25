const db = require("../models");

const getAll = () =>
  new Promise((resolve, reject) => {
    db.airplane.findAll()
      .then((planes) => {
        resolve(planes);
      })
      .catch((error) => {
        reject(error);
      });
  });

module.exports = {
  getAll,
};
