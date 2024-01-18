const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  type: { type: String, required: true, default: "user" },
  nickname: { type: String, required: true },
  registrationDate: { type: String, required: true },
  activationLink: { type: String },
});

module.exports = model("User", UserSchema);
