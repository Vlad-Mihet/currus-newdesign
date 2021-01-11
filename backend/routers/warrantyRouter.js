import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Warranty from '../models/newsletterModel.js'

const warrantyRouter = express.Router();

warrantyRouter.get('/', expressAsyncHandler(async (req, res) => {
    const warranties = await Warranty.find();
    res.send(warranties)
}))

warrantyRouter.post('/', expressAsyncHandler(async (req, res) => {
    const warranty = new Warranty({
        first: req.body.first,
        last: req.body.last,
        order: req.body.order,
        email: req.body.email,
        phone: req.body.phone,
        date: req.body.date,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        country: req.body.country,
        model: req.body.model,
        message: req.body.message

    });

    const createdWarranty = await warranty.save();
    
    res.send({message: 'Subscribed to Newsletter', warranty: createdWarranty })
}))

export default warrantyRouter