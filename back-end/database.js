const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Test");

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected To Mongo successfully");
});

db.on("disconnected", () => {
  console.log("database disconnected");
});

db.on("error", () => {
  console.log("ERROR: database connection error");
});

module.exports = db;
