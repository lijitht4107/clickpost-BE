const IMAGES =require('../models/AddImagesModel')


const AddImage=async (req,res)=>{
console.log(req.query);
    try {
        await IMAGES({
            userId:req.query.userId,
            title:req.query.title,
             description:req.query.Description,
             pitcher:req.file.filename}).save()
          res.status(200).json({message:'image added succesfully'})        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports={AddImage,}