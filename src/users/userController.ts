import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  console.log("request data", req.body);

  const { name, email, password } = req.body;
  //validation
  if (!name || !email || !password) {
    const error = createHttpError(400, "all fields are required");
    return next(error);
  }
  //process
  //Response
  res.json({ message: "User created sucessfully..." });
};

export { createUser };
