import express from "express";
import mongoose from "mongoose";
import productRouter from "./routers/productRouter.js";
import dealerRouter from "./routers/dealerRouter.js";
import userRouter from "./routers/userRouter.js";
import contactRouter from "./routers/contactRouter.js";
import newsletterRouter from "./routers/newsletterRouter.js";
import returnRouter from "./routers/returnRouter.js";
import warrantyRouter from "./routers/warrantyRouter.js";
import orderRouter from "./routers/orderRouter.js";
import path from "path";

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const __dirname = path.resolve();

require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, "/frontend/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.removeHeader("X-Powered-By");
  next();
});

mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log("Connected to DB!"),
);

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/dealers", dealerRouter);
app.use("/api/contacts", contactRouter);
app.use("/api/newsletters", newsletterRouter);
app.use("/api/returns", returnRouter);
app.use("/api/warranties", warrantyRouter);
app.use("/api/orders", orderRouter);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// app.get('/', (req, res) => {
//     res.send('Server is ready')
// })

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  app.use(express.static(path.join(__dirname, "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
