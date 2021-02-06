import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Order from '../models/orderModel.js'
import User from '../models/userModel.js'

const orderRouter = express.Router();

orderRouter.get('/', expressAsyncHandler(async (req, res) => {
    const orders = await Order.find();
    res.send(orders)
}))

orderRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)

    if (order) {
        res.send(order)
    } else {
        res.send(404).send({ message: 'Order Not Found' })
    }
}))

orderRouter.post('/', expressAsyncHandler(async (req, res) => {
    const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        totalPrice: req.body.totalPrice,
        buyer: req.body.buyer,
        isDelivered: false
    });

  

    const createdOrder = await order.save();
  
    const user = await User.findById(req.body.buyer)

    if (user) {
        user.orders.push(createdOrder._id)
        const updatedUser = await user.save();
    }
    
    res.send({message: 'Order Created', order: createdOrder })
}))

export default orderRouter