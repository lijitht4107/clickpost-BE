const mongoose=require('mongoose')

const likeSchema=mongoose.Schema({
    like:{type:Number, required:true}
})

const like = mongoose.model('likes',likeSchema)
module.exports=like