const express = require("express");
const router = express.Router();
const ctrl = require("../controller/airplane");

router.get("/", async (req, res) => {
  try {
    return await ctrl.getAll();
  } catch (error) {
    console.log(error);
    res.send({
      message: "Some error occoured",
      error,
    });
  }
});

module.exports = router;
