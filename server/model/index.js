const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/pfe") //pfe is the name of the db
  .then(() => console.log("db connected"))
  .catch(err => console.log(err));

const db = mongoose.connection

module.exports = db 