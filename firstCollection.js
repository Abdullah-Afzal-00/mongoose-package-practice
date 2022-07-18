const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: String,
  class: String,
});

module.exports = mongoose.model("firstCollection", dataSchema);
