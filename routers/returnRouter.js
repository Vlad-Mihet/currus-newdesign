import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Return from "../models/returnModel.js";

const returnRouter = express.Router();

returnRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const returns = await Return.find();
    res.send(returns);
  }),
);

returnRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const rma = new Return({
      vendor: req.body.vendor,
      action: req.body.action,
      sku: req.body.sku,
      serial: req.body.serial,
      quantity: req.body.quantity,
      date: req.body.date,
      first: req.body.first,
      last: req.body.last,
      company: req.body.company,
      email: req.body.email,
      phone: req.body.phone,
      order: req.body.order,
      street: req.body.street,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      country: req.body.country,
      message: req.body.message,
    });

    const createdReturn = await rma.save();

    res
      .status(201)
      .send({ message: "Return Form Submitted", returns: createdReturn });
  }),
);

export default returnRouter;
