

const express = require("express");

const Ayurveda = require("../models/Ayurveda.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const ayurveda  = await Ayurveda.find().lean().exec();
    return res.status(200).send(ayurveda);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const ayurveda = await Ayurveda.create(req.body);
    return res.status(200).send(ayurveda);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;