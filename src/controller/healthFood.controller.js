const express = require("express");

const HealthFood = require("../models/HealthFood.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const healthFood = await HealthFood.find().lean().exec();
    return res.status(200).send(healthFood);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const healthFood = await HealthFood.create(req.body);
    return res.status(200).send(healthFood);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
