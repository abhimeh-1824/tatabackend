



const express = require("express");

const Categories = require("../models/categorie.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const categories  = await Categories.find().lean().exec();
    return res.status(200).send(categories);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const categories = await Categories.create(req.body);
    return res.status(200).send(categories);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
