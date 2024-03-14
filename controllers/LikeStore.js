const LIKE=require('../models/LikeModel')
const IMAGES =require('../models/AddImagesModel')



const LikeStore=async (req,res)=>{
console.log(req.body)
try {
    const result =IMAGES.findOne({_id:req.query.imageId})
    if(result){
        await LIKE({
            like:req.body.like
        }).save().then((resp)=>{
            res.status(200).json({resp})
        })
    }
} catch (error) {
    console.log(error);
}



}

module.exports={LikeStore}