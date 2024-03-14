const COMMENTS = require('../models/CommentModel');
const IMAGES=require('../models/AddImagesModel')


const AddComments = async (req, res) => {
    try {
        
        
           const newComment= new COMMENTS({
                userId: req.body.userId,
                userName:req.body.userName, 
                comment: req.body.comments ,
                postId: req.body.postId
            });
            const saveComment = await newComment.save();
            res.status(200).json({message:"comment added successfully", comment: saveComment })
             
        
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error occurred while adding comment' });
    }
};
const getImageComments = async (req, res) => {
    try {
        const imageId = req.params.id;
        const comments = await COMMENTS.find({ postId: imageId});
        res.status(200).json(comments)
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'internal server error'})
    }
};

module.exports = { AddComments,getImageComments };
