const IMAGES = require("../models/AddImagesModel");
const ObjectId = require("mongoose").Types.ObjectId;

const getAllImages = (req, res) => {
  IMAGES.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
const getimage = async (req, res) => {
  try {
    // const result = await IMAGES.findOne({ _id: req.query.imageId });
    const result = await IMAGES.aggregate([
      {
        $match: { _id: new ObjectId(req.query.imageId) },
      },
      // {
      //   $lookup: {
      //     from: "comments",
      //     localField: "_id",
      //     foreignField: "postId", 
      //     as: "commentField",
      //   },
      // },
      // {
      //   $unwind:'$commentField'
      // },
     
      // {
      //   $lookup: {
      //     from: "users",
      //     localField: "commentField.userId",
      //     foreignField: "_id",
      //     as: "user",
      //   },
      // }
    ]);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const imageDataUpdate = (req, res) => {
  try {
    IMAGES.updateOne(
      { id: req.body._id },
      { $set: { title: req.body.title, description: req.body.description } }
    ).then((response) => {
      res.status(200).json({ response });
    });
  } catch (error) {
    res.status(500).json({ alert: "server error, pleasse try later" });
  }
};
const deleteImage = async (req, res) => {
  console.log(req.params.id);
  try {
    const imageId = req.params.id;
    const DeletedImage = await IMAGES.findByIdAndDelete(imageId);
    if(!DeletedImage){
      return res.status(404).json({error:"image not found"})
    }
    res.status(200).json({message: "image deleted successfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({error:"internal server error"})
  }

};

module.exports = { getAllImages, getimage, imageDataUpdate, deleteImage }; 
