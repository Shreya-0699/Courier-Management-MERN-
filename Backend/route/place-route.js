
//import express
const express=require('express');
const {check}=require('express-validator');

const placeControllers=require('../controllers/place-controller');


const router=express.Router();//router gives special object on which we can also register middleware which filtered 
//http method and path




router.get('/:pid',placeControllers.getPlaceById);
router.get('/user/:uid',placeControllers.getPlaceByUserId);

router.post('/',
[
check('title').not().isEmpty(),
check('description').isLength({min:5})
],
placeControllers.createPlace
);

router.patch('/:pid',placeControllers.updatePlace);
router.delete('/:pid',placeControllers.deletePlace);

module.exports=router;//configure router object