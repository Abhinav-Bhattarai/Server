const express = require("express");
const mongoose = require("mongoose");

const serverless = require('serverless-http');

const app = express();
const MONGO_URI = "mongodb+srv://Admin:Admin@cluster0.l1ijnvf.mongodb.net/?retryWrites=true&w=majority";

// // middleware
// app.use(json({ limit: "50mb" }));

// db
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch(() => {
    console.log("did not connect to mongoDB");
  });

module.exports = app;
module.exports.handler = serverless(app);