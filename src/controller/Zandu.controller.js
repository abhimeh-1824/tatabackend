



const express = require("express");

const Zandu = require("../models/Zandu.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const zandu  = await Zandu.find().lean().exec();
    return res.status(200).send(zandu);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const zandu = await Zandu.create(req.body);
    return res.status(200).send(zandu);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
