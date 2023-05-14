const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/merndata")
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log("failed", e);
    
  });
  const newSchema= new mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     address:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true
     },
     password:{
        type:String,
        required:true
     },
    
  })

  const collection = mongoose.model("collection", newSchema);
module.exports = collection;