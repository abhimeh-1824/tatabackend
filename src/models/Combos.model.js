const mongoose = require("mongoose");

const combosSchema = new mongoose.Schema(
  {
    Titel: { type: String, required: true },
    Image: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("combos", combosSchema);
