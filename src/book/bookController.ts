import { Request, Response, NextFunction } from "express";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  console.log("files", req.files);

  res.json({ message: "book created succesfully" });
};
export { createBook };
