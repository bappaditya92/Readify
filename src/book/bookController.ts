import path from "node:path";
import fs from "node:fs";
import { Request, Response, NextFunction } from "express";

import cloudinary from "../config/cloudinary";
import createHttpError from "http-errors";
import bookModel from "./bookModel";
const createBook = async (req: Request, res: Response, next: NextFunction) => {
  const { title, genre } = req.body;
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

    const bookFileName = files.file[0].filename;
    const bookFilePath = path.resolve(
      __dirname,
      "../../public/data/uploads",
      bookFileName
    );

    const bookFileUploadResult = await cloudinary.uploader.upload(
      bookFilePath,
      {
        resource_type: "raw",
        filename_override: bookFileName,
        folder: "book-pdfs",
        format: "pdf",
      }
    );
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    console.log("userId: ", req.userId);
    const newBook = await bookModel.create({
      title,
      genre,
      author: "67f3c4dd717b7a57e356d3fb",
      coverImage: uploadResult.secure_url,
      file: bookFileUploadResult.secure_url,
    });

    //delete temporary file
    await fs.promises.unlink(filePath);
    await fs.promises.unlink(bookFilePath);

    res.status(201).json({ id: newBook._id });
  } catch (err) {
    console.log(err);
    return next(createHttpError(500, "error while uploading"));
  }
};

export { createBook };
