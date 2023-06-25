const express = require("express");
const router = express.Router();
const ctrl = require("../controller/airplane");

router.get("/", (req, res) => {
  ctrl
    .getAll()
    .then((result) => {
      res.send({
        message: "All users fetched",
        data: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send({
        message: "Some error occoured",
        error,
      });
    });
});

module.exports = router;
