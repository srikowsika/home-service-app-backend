const client = require("../index");
const express = require("express");
const router = express.Router();
const database = require("../databaseConfig.js");
// const app = express()
// var database;
var service;

router.get("/", async (req, res) => {
  let orderList = await database
    .collection("order")
    .find({})
    .toArray((err, docs) => {
      callback(docs);
    });
  res.status(200).json(orderList);
});

router.delete("/deleteBooking/:id", async (req, res) => {
  // console.log(req.params)
  let orderList = await database
    .collection("order")
    .find({})
    .toArray((err, docs) => {
      callback(docs);
    });
  res.status(200).json(orderList);
});

router.post("/addOrder", async (req, res) => {
  let order = {};
  await (req.body.orderedItem || []).map(async (orderIt, index) =>  {
    order = await database
    .collection("order")
    .insertOne({orderedItem: orderIt, orderDate: req.body.confirmDate, address: "Flat 123, Block 8, Attah Nagar, Bangalore"}, (err, docs) => {
      callback(docs);
    });
    if(index == req.body.orderedItem.length - 1) {
      let resObj = {}
      if(order.acknowledged && order.insertedId != "")
      {
         resObj = {
            message: "Service Scheduled Successfully!",
            success: true
        }
        res.status(200).json(resObj);
      } else{
        resObj = {message: "Failed to schedule the service", success: false};
        res.status(200).json(resObj);
      }
    }
  })
  
});

module.exports = router;
