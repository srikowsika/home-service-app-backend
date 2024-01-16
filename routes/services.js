const client= require("../index");
const express = require('express')
const router = express.Router();
const database = require("../databaseConfig.js");
// const app = express()
// var database;
var service;

router.get('/', async (req, res) =>  {
  // app.get("/services", async (req, res) => {
    console.log("ppsp");
    // let database = await run().catch();
    let services = await database
      .collection("serviceCategory")
      .find({})
      .toArray((err, docs) => {
        console.log(docs);
        // return "docs" array
        callback(docs);
      });
    // console.log(services);
    res.status(200).json(services);
  // });
  })

router.get("/serviceDetails/:serviceId", async (req, res) => {
  console.log("ppskkkkp");
  // app.get("/services", async (req, res) => {
  console.log(req.params);
  // let database = await run().catch();
  let services = await database
    .collection("serviceCatelog")
    .find({ serviceId : parseInt(req.params.serviceId)})
    .toArray((err, docs) => {
      console.log(docs);
      // return "docs" array
      callback(docs);
    });
  console.log(services);
  res.status(200).json(services);
  // });
});

module.exports = router;