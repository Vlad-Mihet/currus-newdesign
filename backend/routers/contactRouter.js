import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Contact from "../models/contactModel.js";

const contactRouter = express.Router();

contactRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.send(contacts);
  }),
);

contactRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const contact = new Contact({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      address: req.body.address,
      message: req.body.message,
    });

    const createdContact = await contact.save();

    res.send({ message: "Contact Created", contact: createdContact });
  }),
);

export default contactRouter;
