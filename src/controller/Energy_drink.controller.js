

const express = require("express");

const Energydrink = require("../models/Energydrink.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const energydrink  = await Energydrink.find().lean().exec();
    return res.status(200).send(energydrink);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const energydrink = await Energydrink.create(req.body);
    return res.status(200).send(energydrink);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
