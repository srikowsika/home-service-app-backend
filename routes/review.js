const client = require("../index");
const express = require("express");
const router = express.Router();
const database = require("../databaseConfig.js");
// const app = express()
// var database;
var service;

router.get("/", async (req, res) => {
  // app.get("/services", async (req, res) => {
  console.log("ppsp");
  // let database = await run().catch();
  let orderList = await database
    .collection("order")
    .find({})
    .toArray((err, docs) => {
      console.log(docs);
      // return "docs" array
      callback(docs);
    });
  // console.log(services);
  res.status(200).json(orderList);
  // });
});

router.post("/addOrder", async (req, res) => {
  console.log(req.body);
  let order = await database
    .collection("order")
    .insertOne({orderedItem: req.body.orderedItem, orderDate: req.body.confirmDate, address: "Flat 123, Block 8, Attah Nagar, Bangalore"}, (err, docs) => {
      console.log(docs);
      callback(docs);
    });
  console.log(order);
  if(order.acknowledged && order.insertedId != "")
  {
    let resObj = {
        message: "Service Scheduled Successfully!",
        success: true
    }
    console.log(resObj)
    res.status(200).json(resObj);
  } else{
    res.status(200).json({message: "Failed to schedule the service", success: false});
  }
  // });
});

module.exports = router;
