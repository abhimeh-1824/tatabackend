



const express = require("express");

const Tata1Mg = require("../models/tata1Mg.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const tata1Mg  = await Tata1Mg.find().lean().exec();
    return res.status(200).send(tata1Mg);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const tata1Mg = await Tata1Mg.create(req.body);
    return res.status(200).send(tata1Mg);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
