import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import data from "../data.js";

import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import { generateToken } from "../utils.js";

const userRouter = express.Router();

userRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
  }),
);

userRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
      .populate("wishlist")
      .select("-password -__v");

    res.send(user);
  }),
);

userRouter.post(
  "/:id/wishlist/:productid",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
      .populate("orders")
      .populate("wishlist");

    const product = await Product.findById(req.params.productid);

    if (user && product) {
      user.wishlist.push(req.params.productid);
      var updatedUser = await user.save();
    }

    res.send(updatedUser);
  }),
);

userRouter.put(
  "/:id/wishlist/:productid",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
      .populate("orders")
      .populate("wishlist");

    const product = await Product.findById(req.params.productid);

    if (user && product) {
      console.log("put reached");
      user.wishlist = user.wishlist.filter(
        (item) => item._id.toString() !== req.params.productid,
      );
      var updatedUser = await user.save();
    } else {
      console.log("blah blah blah");
    }

    res.send(updatedUser);
  }),
);

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send(createdUsers);
  }),
);

userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();

    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      token: generateToken(createdUser),
    });
  }),
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
      .populate("orders")
      .populate("wishlist");
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          orders: user.orders,
          createdAt: user.createdAt,
          email: user.email,
          wishlist: user.wishlist,
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  }),
);

export default userRouter;
