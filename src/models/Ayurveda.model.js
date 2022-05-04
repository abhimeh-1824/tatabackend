const mongoose = require("mongoose");

const ayurvedaSchema = new mongoose.Schema(
  {
    Titel: { type: String, required: true },
    Image: { type: String, required: true },
    Discription : {type : String , require :true}
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("ayurveda", ayurvedaSchema);
