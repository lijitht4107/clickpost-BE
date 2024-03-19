const dotenv = require('dotenv').config()
const mongoose = require("mongoose");


const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.DB_URL,
      {
        useNewUrlParser: "true",
      }
    );
    console.log("Mongodb data base connected");
  } catch (err) {
    console.log(err, "not connected");
  }
};
module.exports = connectDb;
