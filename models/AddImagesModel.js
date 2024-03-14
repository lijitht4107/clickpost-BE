const mongoose=require('mongoose')

const AddImagesSchema=mongoose.Schema({
    title:{ type:String, required: true },
    description:{ type:String, required:true },
    pitcher:{ type:String, require:true },
    timeStamp:{ type:Date, default:Date.now }
})

const images = mongoose.model('imagefiles',AddImagesSchema)
module.exports = images