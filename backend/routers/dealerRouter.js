import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Dealer from '../models/dealerModel.js'

const dealerRouter = express.Router();

dealerRouter.get('/', expressAsyncHandler(async (req, res) => {
    const dealers = await Dealer.find();
    res.send(dealers)
}))

dealerRouter.post('/', expressAsyncHandler(async (req, res) => {
    
}))

export default dealerRouter