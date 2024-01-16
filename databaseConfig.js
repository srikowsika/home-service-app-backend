const { MongoClient } = require("mongodb");
const connectionString = "mongodb://ec2-3-110-142-179.ap-south-1.compute.amazonaws.com:27017/"//"mongodb://127.0.0.1:27017";
let client = new MongoClient(connectionString);
let database;

async function run() {
  try {
    console.log("paakj");
    database = client.db("home-service-app-database");
    //  console.log(database
    //  let options = {sort: { title: 1 }};
    // Include only the `title` and `imdb` fields in each returned document
    // projection: { _id: 0, service: 1 },}
    // let list = await services.find({}, options);
    // res.send(services);
    return database;

    // const query = { service: 'Cleaning' };
    // const newService = await services.insertOne(query);
    // let options = {sort: { title: 1 },
    // // Include only the `title` and `imdb` fields in each returned document
    // projection: { _id: 0, service: 1 },}

    // console.log(newService);
  }finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.log(console.dir));

module.exports=database;