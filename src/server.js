import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import MemoriesRoute from "../memories.js";
import LettersRoute from "../letters.js";

const serverless = require('serverless-http');

const app = express();
const PORT = 8080;
const MONGO_URI =
  "mongodb+srv://Admin:Admin@cluster0.l1ijnvf.mongodb.net/?retryWrites=true&w=majority";
// middleware
app.use(express.json({ limit: "50mb" }));
app.use(
  cors({
    credentials: true,
  })
);

// api endpoints
app.use(".netlify/functions/memories", MemoriesRoute);
app.use(".netlify/functions/letters", LettersRoute);

// db
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch(() => {
    console.log("did not connect to mongoDB");
  });

app.listen(PORT, () => {
  console.log(`Listening to localhost:${PORT}`);
});

module.exports.handler = serverless(app);
