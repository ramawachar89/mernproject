const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require("./db");
const cors = require("cors");

mongoDB();

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!-----');
});

app.use(express.json());
app.use('/api', require("./Routes/CreatUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
