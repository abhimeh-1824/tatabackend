const mongoose = require("mongoose");

const tata1MgSchema = new mongoose.Schema(
  {
    Titel: { type: String, required: true },
    Image: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("tata1Mg", tata1MgSchema);
