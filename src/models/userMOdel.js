import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String },
    Email: { type: String },
    password: { type: String},
  },
  {
    timestamps: true,
  }
);

const user = mongoose.models.user || mongoose.model("user", userSchema);

export default user;
