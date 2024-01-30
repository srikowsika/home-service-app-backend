const express = require('express')
const cors = require('cors');
const database = require('./databaseConfig.js');
const app = express();
const port = 4000;
var bodyParser = require('body-parser');


const serviceRoutes = require('./routes/services.js'),
  cityRoutes = require("./routes/city.js");
  orderRoutes = require("./routes/order.js");




app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());



app.use('/services',serviceRoutes);
app.use("/city", cityRoutes);
app.use('/order', orderRoutes);
app.use('/', (req, res) => {
  console.log("new route")
  res.send('hello world')
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
