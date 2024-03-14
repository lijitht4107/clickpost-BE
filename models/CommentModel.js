const mongoose=require('mongoose')

const AddCommentsSchema=mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'users'},
    comment:{type:String,required:true},
    postId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'imagefiles'},
    userName:{type:mongoose.Schema.Types.String,required:true,ref:'users'},

},{ timestamps: true })

const comments=mongoose.model('comments',AddCommentsSchema)

module.exports=comments