

const express = require("express");

const Combos = require("../models/Combos.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const combos  = await Combos.find().lean().exec();
    return res.status(200).send(combos);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const combos = await Combos.create(req.body);
    return res.status(200).send(combos);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
