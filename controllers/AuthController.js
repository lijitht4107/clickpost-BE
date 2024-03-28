const USERS = require('../models/UserModels')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt=require('jsonwebtoken')

//handlers
const doSignUp = async (req,res) => {
    try {
        const users =await USERS.findOne({email:req.body.email})
        if(users){
            res.status(200).json({message:"email already exist"})
            return
        
    }
bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    USERS({
        userName:req.body.userName,
        email:req.body.email,
        password:hash
    }).save().then((response)=>{
        res.status(200).json({message:"signup successfull"})
    })
  });

    
    console.log(req.body,'signupp');
        
    } catch (error) {
        console.log(error);
    }
    
    

}
const doLogin= async (req,res) => {
    try {
        
        const user =await USERS.findOne({email:req.body.email})
  
        if(user){
            bcrypt.compare(req.body.password,user.password,(err,hashRes)=>{
                
                if(hashRes){
    
                
                const token =jwt.sign({userId:user._id,email:user.email,userName:user.userName,role:user?.role,},"clickpost",{expiresIn:'2d'})
                user.password = undefined
                res.status(200).json({message:"login successfull",token:token, user:user })
                }
                    })
        }else{
            res.status(200).json({message:"invalied credentials",token:null})
        }
    
        
    } catch (error) {
        console.log(error);
    }
   
}

module.exports = {doSignUp,doLogin}