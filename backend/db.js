// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://ramawachar621:03LpOAU3tJefEQEn@cluster0.qiealrm.mongodb.net/gofoodmern?retryWrites=true&w=majority';

// const mongoDB = async () => {
//   const connection = await mongoose.connect(mongoURI, { useNewUrlParser: true })
//     .catch(error => {
//       console.error('Error connecting to MongoDB:', error.message);
//       // Add your code here to handle error
//     });

//   if (connection) {
//     console.log('Connected to MongoDB');
//     // Add your code here to handle successful connection
//     const fetched_data= await mongoose.connection.db.collection("food_items")
//     fetched_data.find({}).toArray(function(err,data){
//         if(err) console.log(err)
//         else console.log(data);
//     })
//   }
// };

// module.exports = mongoDB;
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://ramawachar621:03LpOAU3tJefEQEn@cluster0.qiealrm.mongodb.net/gofoodmern?retryWrites=true&w=majority';

const mongoDB = async () => {
  const connection = await mongoose.connect(mongoURI, { useNewUrlParser: true })
    .catch(error => {
      console.error('Error connecting to MongoDB:', error.message);
      // Add your code here to handle error
    });

  if (connection) {
    console.log('Connected to MongoDB');
    // Add your code here to handle successful connection

    // Fetch data from the "food_items" collection
    const FoodItem = mongoose.model('food_items', new mongoose.Schema({}), 'food_items');
    const data = await FoodItem.find({}).lean();//we define a Mongoose model named "FoodItem" that represents the "food_items" collection. Then, we use the find({}) method on the "FoodItem" model to fetch all documents from the collection. The lean() method is used to obtain plain JavaScript objects instead of Mongoose documents.
     
     const FoodCategory = mongoose.model('food_category', new mongoose.Schema({}), 'foodCategory');
     const data2 = await FoodCategory.find({}).lean();//we define a Mongoose model named "FoodItem" that represents the "food_items" collection. Then, we use the find({}) method on the "FoodItem" model to fetch all documents from the collection. The lean() method is used to obtain plain JavaScript objects instead of Mongoose documents.
     global.food_items=data
     global.foodCategory=data2
     console.log(global.foodCategory)
    //  console.log(global.food_items)
  }
};

module.exports = mongoDB;




