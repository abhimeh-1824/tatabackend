





const express = require("express");

const HealthCon = require("../models/HealthConcern.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const healthCon  = await HealthCon.find().lean().exec();
    return res.status(200).send(healthCon);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const healthCon = await HealthCon.create(req.body);
    return res.status(200).send(healthCon);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
