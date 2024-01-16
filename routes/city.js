const express = require("express");
const router = express.Router();
const database = require("../databaseConfig.js");

router.get("/", async (req, res) => {
  console.log("ppsp");
  let cities = await database
    .collection("city")
    .find({})
    .toArray((err, docs) => {
      console.log(docs);
      callback(docs);
    });
  console.log(cities);
  res.status(200).json(cities);
});

module.exports = router;
