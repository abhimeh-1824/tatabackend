
const express = require("express");
const Uses = require("../models/Uses.model");
const router = express.Router();



router.get("", async (req, res) => {
  try {
    const uses  = await Uses.find().lean().exec();
    return res.status(200).send(uses);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});



router.post("", async (req, res) => {
  try {
    const uses = await Uses.create(req.body);
    return res.status(200).send(uses);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;