import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Order from '../models/orderModel.js'

const orderRouter = express.Router();

orderRouter.get('/', expressAsyncHandler(async (req, res) => {
    const orders = await Order.find();
    res.send(orders)
}))

orderRouter.post('/', expressAsyncHandler(async (req, res) => {
    const order = new Order({
    
    });

    const createdOrder = await order.save();
    
    res.send({message: 'Order Created', order: createdOrder })
}))

export default orderRouter