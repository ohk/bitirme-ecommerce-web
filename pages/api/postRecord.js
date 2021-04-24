const mongoose = require("mongoose");

const uri = process.env.DB_URI;

const recordSchema = new mongoose.Schema({
  time: { type: Date, default: Date.now },
  buyStatus: Number,
  mouseData: [
    {
      x: Number,
      y: Number,
      type: Number,
      time: Date,
    },
  ],
});

const MouseRecord = mongoose.model("MouseRecord", recordSchema);

mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  function (error) {
    if (error) console.log("Error!" + error);
  }
);

module.exports = function (req, res) {
  if (req.method === "GET") {
    res.status(404);
  } else if (req.method === "POST") {
    const newRecord = new MouseRecord(req.body);
    newRecord
      .save()
      .then((newRecord) => res.status(200).json(newRecord))
      .catch((err) => res.status(500).json(err.message));
  }
};
