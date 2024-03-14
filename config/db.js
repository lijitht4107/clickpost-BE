const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://lijiththazhathethil:jzs2FZSpGrlOLFfY@cluster0.86bvk2c.mongodb.net/clickpost",
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
