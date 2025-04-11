import path from "node:path";
import { Request, Response, NextFunction } from "express";

import cloudinary from "../config/cloudinary";
const createBook = async (req: Request, res: Response, next: NextFunction) => {
  console.log("files", req.files);
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  //application/pdf
  const coverImageMimeType = files.coverImage[0].mimetype.split("/").at(-1);
  const fileName = files.coverImage[0].filename;
  const filePath = path.resolve(
    __dirname,
    "../../public/data/uploads",
    fileName
  );

  const uploadResult = await cloudinary.uploader.upload(filePath, {
    filename_override: __filename,
    folder: "book-covers",
    format: coverImageMimeType,
  });
  // console.log("uploadresult", uploadResult);

  res.json({});
};

export { createBook };
