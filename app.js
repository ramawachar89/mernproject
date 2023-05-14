const express=require('express')
const app=express()
const collection = require("./db");
const port=3000
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.post("/addUser",async (req, res) => {

  const { name,password,email,address } = req.body;
  const data = {
    name:name,
    password:password,
    email:email,
    address:address
  };
  try {
    await collection.insertMany([data]);
    const allData = await collection.find({});
    res.json(allData);
  } catch (e) {
    res.json("fail");
    console.log(e);
  }
});
app.get("/getData", async (req, res) => {
    try {
      const allUser = await collection.find({});
      res.json({ status: "ok", data: allUser });
    } catch (e) {
      console.log(e);
      res.json({ status: "error", message: "Failed to get users" });
    }
  });
  app.get("/foodData", async (req, res) => {
    try {
      const foodD = await foodapp.find({});
      res.json({ status: "ok", data: foodD });
    } catch (e) {
      console.log(e);
      res.json({ status: "error", message: "Failed to get users" });
    }
  });

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})