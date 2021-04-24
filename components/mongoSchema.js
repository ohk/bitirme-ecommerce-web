const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  time: { type: Date, default: Date.now },
  windowX: Number,
  windowY: Number,
  buyStatus: Number,
  mouseData: [],
});

module.exports = mongoose.model("MouseRecord", recordSchema);
