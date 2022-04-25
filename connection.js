const mongoose = require('mongoose')
// db name = The_Spot
let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/book-e";
  }
  


mongoose.connect("mongodb://127.0.0.1/The_Spot")

module.exports = mongoose