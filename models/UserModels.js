const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password:{ type: String, required: true },
  role: { type: Number, required: true, default: 3}
});

const users = mongoose.model('users',UserSchema)
module.exports = users
