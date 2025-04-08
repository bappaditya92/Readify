import mongoose from "mongoose";
import { Book } from "./bookTypes";

const booksSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    coverImage: {
      type: String,
      require: true,
    },
    file: {
      type: String,
      require: true,
    },
    genre: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const booksModel = mongoose.model<Book>("Books", booksSchema);
export default booksModel;
