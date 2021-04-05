import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Dealer from "../models/dealerModel.js";

const dealerRouter = express.Router();

dealerRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const dealers = await Dealer.find();
    res.send(dealers);
  }),
);

dealerRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const dealer = new Dealer({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      storeaddress: req.body.storeaddress,
      message: req.body.message,
    });

    const createdDealer = await dealer.save();

    res.status(201).send({ message: "Dealer Created", dealer: createdDealer });
  }),
);

export default dealerRouter;
