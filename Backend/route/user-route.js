//responsible to handle route related places and user
//import express
const express=require('express');
const{check}=require('express-validator');
const userControllers=require('../controllers/user-controller');


const router=express.Router();//router gives special object on which we can also register middleware which filtered 
//http method and path




router.get('/',userControllers.getUsers);


router.post('/signup',
[
    check('firstName').not().isEmpty(),
    check('LastName').not().isEmpty(),

check('email').normalizeEmail().isEmail(),
check('password').isLength({min:6})
],
userControllers.signUp
);

router.post('/login',userControllers.login);

module.exports=router;//configure router object