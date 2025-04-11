import path from "node:path";
import { Request, Response, NextFunction } from "express";

import cloudinary from "../config/cloudinary";
import createHttpError from "http-errors";
const createBook = async (req: Request, res: Response, next: NextFunction) => {
  //console.log("files", req.files);
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  //application/pdf
  const coverImageMimeType = files.coverImage[0].mimetype.split("/").at(-1);
  const fileName = files.coverImage[0].filename;
  const filePath = path.resolve(
    __dirname,
    "../../public/data/uploads",
    fileName
  );

  try {
    const uploadResult = await cloudinary.uploader.upload(filePath, {
      filename_override: __filename,
      folder: "book-covers",
      format: coverImageMimeType,
    });
    // console.log("uploadresult", uploadResult);
  } catch (err) {
    console.log(err);
  }

  const bookFileName = files.file[0].filename;
  const bookFilePath = path.resolve(
    __dirname,
    "../../public/data/uploads",
    bookFileName
  );

  try {
    const bookFileUploadResult = await cloudinary.uploader.upload(
      bookFilePath,
      {
        resource_type: "raw",
        filename_override: bookFileName,
        folder: "book-pdfs",
        format: "pdf",
      }
    );
    res.json({});
  } catch (err) {
    console.log(err);
    return next(createHttpError(500, "error while uploading"));
  }
};

export { createBook };
