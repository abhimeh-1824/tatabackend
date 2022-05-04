

const mongoose = require("mongoose");
module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://Vaibhav_0702:Vaibhav_0702@cluster0.lzfpk.mongodb.net/tata-1Mg?retryWrites=true&w=majority"
  );
};