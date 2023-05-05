

//middleware

const express=require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');


const placesRoutes=require('./route/place-route');
const userRoutes=require('./route/user-route');
const HttpError=require('./models/http-error');


const app=express();
//first bodyparse brfore the middleware
app.use(bodyParser.json());

//register means router which configure added as middleware
app.use('/api/places',placesRoutes);//=>/api/places/...
app.use('/api/users',userRoutes);
//default run if no res is send
app.use((req,res,next)=>{
    const error=new HttpError('could not found route',404);
    throw error;

});
//default error
app.use((error,req,res,next)=>{//error handling middleware function
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message:error.message||'an unkonown error occured'});
});
//
//app.use(bodyParser.json());
//app.post('/products');
//app.get('/products');
mongoose.connect('mongodb+srv://priya:Priya%4002@cms.wxby1xx.mongodb.net/cms?retryWrites=true&w=majority').
then(()=>{
    app.listen(5000);

})
.catch(err=>{
    console.log(err);
});
