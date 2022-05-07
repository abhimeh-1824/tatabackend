
const express = require("express");
const Items = require("../models/Items.model");
const router = express.Router();



router.get("", async (req, res) => {
  try {
    const items  = await Items.find().lean().exec();
    return res.status(200).send(items);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const items = await Items.create(req.body);
    return res.status(200).send(items);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;