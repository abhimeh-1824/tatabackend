const express = require("express");

const Brands = require("../models/Featured_brands.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const brands  = await Brands.find().lean().exec();
    return res.status(200).send(brands);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const brands = await Brands.create(req.body);
    return res.status(200).send(brands);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
