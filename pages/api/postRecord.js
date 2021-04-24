const mongoose = require("mongoose");
import Record from "../../components/mongoSchema";
const uri = process.env.DB_URI;

mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  function (error) {
    if (error) console.log("Error!" + error);
  }
);

module.exports = function (req, res) {
  if (req.method === "GET") {
    res.status(500).json({ a: "Hello World" });
  } else if (req.method === "POST") {
    let newRecord = new Record(req.body);
    newRecord
      .save()
      .then((response) => {
        console.log(response);
        res.status(200).json({ a: "ok!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err.message);
      });
  }
};
