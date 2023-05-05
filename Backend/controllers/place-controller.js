const HttpError=require('../models/http-error');
const{validationResult}=require('express-validator');

let DUMMY_PlACES=[
    {
        id:'p1',
        title:'shreya',
        decsription:'computerScience',
        location:'akola',
        creator:'u1'
    }
];
const getPlaceById=(req,res,next)=>{
    const placeId=req.params.pid;//{pid:'p1'}
    const place=DUMMY_PlACES.find(p=>{
        return p.id===placeId;
    });
    console.log("get requested in places");
    if(!place)
    {
        
        throw new HttpError('cound not found id',404);
        
        //return res.status(404).json({meassage:'could not found place'});
    }
    res.json({place});
};
const getPlaceByUserId=(req,res,next)=>{

    const userId=req.params.uid;//api/places/user/uid
    const user=DUMMY_PlACES.find(p=>{
        return p.creator===userId;
    });
    console.log("user");
    if(!user)
    {
        
        return next(new HttpError('cound not found userid',404));


        
        //return res.status(404).json({meassage:'could not found user'});
    }
    res.json({user});
};

const createPlace=(req,res,next)=>{
    const error=validationResult(req);
    if(!error.isEmpty())
    {
        console.log(error);
        
        throw new HttpError('invalid input passesd',422);
    }
const {title,decsription,location,creator}=req.body;
const createdPlace={
    title,
    decsription,
    location,
    creator
};
DUMMY_PlACES.push(createdPlace);
res.status(201).json({place:createdPlace});


};
const updatePlace=(req,res,next)=>{
    const {decsription,location}=req.body;
    const placeId=req.params.pid;
    const updatedPlace={...DUMMY_PlACES.find(p=>p.id===placeId)};
    const placeIndex=DUMMY_PlACES.findIndex(p=>p.id===placeId);
    updatedPlace.decsription=decsription;
    updatedPlace.location=location;
    DUMMY_PlACES[placeIndex]=updatedPlace;
    res.status(200).json({place:updatedPlace});

    


};
const deletePlace=(req,res,next)=>{
    const placeId=req.params.pid;
    if(!DUMMY_PlACES.find(p=>p.id===placeId))
    {
        throw new HttpError('could not find for that id',404);
    }
    
    DUMMY_PlACES=DUMMY_PlACES.filter(p=>p.id!==placeId);
    res.status(200).json({message:'deleted place'});
};
exports.getPlaceById=getPlaceById;
exports.getPlaceByUserId=getPlaceByUserId;
exports.createPlace=createPlace;
exports.updatePlace=updatePlace;
exports.deletePlace=deletePlace;