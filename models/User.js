const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  age: {
    type: Number,
    default: 1,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
