const express = require("express");

const ProductForm = require("../models/ProductForm.model");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const productForm  = await ProductForm.find().lean().exec();
    return res.status(200).send(productForm);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const productForm = await ProductForm.create(req.body);
    return res.status(200).send(productForm);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;