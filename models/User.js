import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  dateOfBirth: { type: Date, required: false },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = new mongoose.model("user", userSchema);

export default User;
