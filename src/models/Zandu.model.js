const mongoose = require("mongoose");

const zanduSchema = new mongoose.Schema(
  {
    img: { type: String, required: false },
    title: { type: String, required: false },
    img1: { type: String, required: false },
    img2: { type: String, required: false },
    img3: { type: String, required: false },
    img4: { type: String, required: false },
    img5: { type: String, required: false },
    Subtitle: { type: String, required: false },
    line1: { type: String, required: false },
    line2: { type: String, required: false },
    line3: { type: String, required: false },
    pack: { type: Number, required: false },
    type: { type: String, required: false },
    form: { type: String, required: false },
    quintity: { type: String, required: false },
    unit: { type: String, required: false },
    mrp: { type: String, required: false },
    discount: { type: String, required: false },
    payment: { type: String, required: false },
    star: { type: String, required: false },
    rating: { type: String, required: false },
    people: { type: Number, required: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("zandu",zanduSchema);
