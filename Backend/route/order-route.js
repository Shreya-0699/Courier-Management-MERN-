import express from "express";
import { addConsignment, getOrders } from "../controllers/order-controller.js";
import Order from "../models/order.js";


const orderRouter=express.Router();

orderRouter.get('/',getOrders);
orderRouter.post('/add',addConsignment);

//orderRouter.get('/:id',getOrderById);
//orderRouter.put('/:id',editOrder);
//orderRouter.delete('/:id',deleteOrder);
export default orderRouter;
