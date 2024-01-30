const { MongoClient } = require("mongodb");
const connectionString = "mongodb://ec2-3-110-142-179.ap-south-1.compute.amazonaws.com:27017/"//"mongodb://127.0.0.1:27017";
let client = new MongoClient(connectionString);
let database;

async function run() {
  try {
    console.log("paakj");
    database = client.db("home-service-app-database");
    return database;
  }finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.log(console.dir));

module.exports=database;