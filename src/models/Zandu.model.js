const mongoose = require("mongoose");

const zanduSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    title: { type: String, required: true },
    img1: { type: String, required: true },
    img2: { type: String, required: true },
    img3: { type: String, required: true },
    img4: { type: String, required: true },
    img5: { type: String, required: true },
    Subtitle: { type: String, required: true },
    line1: { type: String, required: true },
    line2: { type: String, required: true },
    line3: { type: String, required: true },
    pack: { type: Number, required: true },
    type: { type: String, required: true },
    form: { type: String, required: true },
    quintity: { type: String, required: true },
    unit: { type: String, required: true },
    mrp: { type: String, required: true },
    discount: { type: String, required: true },
    payment: { type: String, required: true },
    star: { type: String, required: true },
    rating: { type: String, required: true },
    people: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("zandu", zanduSchema);
