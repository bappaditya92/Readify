import mongoose from "mongoose";
import { User } from "./userTypes";

const userSchema = new mongoose.Schema<User>(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

//users collection
export default mongoose.model<User>("User", userSchema);
