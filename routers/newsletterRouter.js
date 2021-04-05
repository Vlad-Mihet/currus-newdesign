import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Newsletter from "../models/newsletterModel.js";

const newsletterRouter = express.Router();

newsletterRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const newsletters = await Newsletter.find();
    res.send(newsletters);
  }),
);

newsletterRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const newsletter = new Newsletter({
      email: req.body.email,
    });

    const createdNewsletter = await newsletter.save();

    res
      .status(201)
      .send({
        message: "Subscribed to Newsletter",
        newsletter: createdNewsletter,
      });
  }),
);

export default newsletterRouter;
