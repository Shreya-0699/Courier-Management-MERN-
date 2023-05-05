import express from "express";
import Order from "../models/order.js";
import Consignment from "../models/consignment.js";

//const orderRouter=express.Router();


export const getOrders=async (request,response)=>{
    try{
        const order=await Consignment.find();
        response.status(200).json(order); 
    }
    catch( error ){
        response.status(404).json({ message: error.message })
    }
}
export const addConsignment = async (request, response) => {
    const order = request.body;
    
    const newOrder = new Consignment(order);
    console.log(newOrder);
    try{
        await newOrder.save();
        response.status(201).json(newOrder);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
export const editOrder = async (request, response) => {
    let user = request.body;

    const editOrder = new Consignment(user);
    try{
        await Consignment.updateOne({_id: request.params.id}, editOrder);
        response.status(201).json(editOrder);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}



