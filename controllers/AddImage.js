const IMAGES= require ('../models/AddImagesModel')

const AddImage = async (req, res) => {
  console.log(req.body); // Access values from req.body instead of req.query
  try {
    await IMAGES({
      userId: req.body.userId,
      title: req.query.title,
      description: req.query.Description, // Note the capitalization of "Description"
      pitcher: req.file.filename,
    }).save();
    res.status(200).json({ message: "image added successfully" }); // Corrected spelling of "successfully"
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error123" });
  }
};

module.exports={AddImage}