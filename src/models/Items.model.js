const mongoose = require("mongoose");

const ItemsSchema = new mongoose.Schema(
  {
    img: { type: String, required: false },
    title: { type: String, required: false },
    type: { type: String, required: false },
    form: { type: String, required: false },
    quintity: { type: String, required: false },
    unit: { type: String, required: false },
    mrp: { type: String, required: false },
    discount: { type: String, required: false },
    payment: { type: String, required: false },
    star: { type: String, required: false },
    rating: { type: String, required: false },
    id: { type: Number, required: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("item", ItemsSchema);
