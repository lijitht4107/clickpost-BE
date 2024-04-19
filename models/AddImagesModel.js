const mongoose = require("mongoose");

const AddImagesSchema = mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  pitcher: { type: String, required: true },
  timeStamp: { type: Date, default: Date.now },
});

const images = mongoose.model("imagefiles", AddImagesSchema);
module.exports = images;
