const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    product: { type: String, required: true },
    quintity: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("brand", brandSchema);
