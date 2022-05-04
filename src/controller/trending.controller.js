

const express = require("express");

const Trending = require("../models/trending.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const trending  = await Trending.find().lean().exec();
    return res.status(200).send(trending);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const trending = await Trending.create(req.body);
    return res.status(200).send(trending);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
