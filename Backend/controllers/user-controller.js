const uuid=require('uuid')
const HttpError=require('../models/http-error');
const User=require('../models/user');
const{validationResult}=require('express-validator');


const getUsers=async(req,res,next)=>{
    let users;
    try{
           users=await User.find({},'-password');
    }
    catch(err)
    {
        const error=new HttpError('fetching users failed',500);
        return next(error);
    }
    res.json({users:users.map(user=>user.toObject({getters:false}))});
};


const signUp= async(req,res,next)=>{
    
    const {email,firstName,lastName,role,dateOfBirth,gender,password,mobileNo,address}=req.body;
    let existingUser;
    try{
          existingUser= await User.findOne({email:email});
    }
catch(err){
         
        const error=new HttpError('signing failed',500);
        return next(error);
        }
        if(existingUser)
    {
        const error=new HttpError('user alreadyexists',422);
        return next(error);
    }
    

    const createdUser=new User({
        firstName,
        lastName,
        email,
        password,
        mobileNo,
        dateOfBirth,
        gender,
        role,
        address
    });

      try{
        await createdUser.save();
    } 
    catch(err){
    
        const error=new HttpError('siging up fail',500);
        console.log(err);
        return next(error);
        }
    
    
    res.status(201).json({user:createdUser.toObject({getters:true})});
};

const login=async (req,res,next)=>{
    const {email,password}=req.body;
    let existingUser;
    try{
        existingUser=await User.findOne({email:email})
    }catch(err){
        const error=new HttpError('logging failed',500);
        return next(error);
    }
    if(!existingUser || existingUser.password!==password)
    {
        const error=new HttpError('invlid ceredential',401);
        return next(error);
    }
    
    
    res.json({message:'logged in'});

};
exports.getUsers=getUsers;
exports.signUp=signUp;
exports.login=login;