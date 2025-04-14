/* eslint-disable @typescript-eslint/no-unused-vars */

import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./middlewares/globalErrorHandlers";

import { config } from "./config/config";
import userRoute from "./users/usersRoute";
import bookRouter from "./book/bookRouter";

const app = express();

app.use(
  cors({
    origin: config.frontEndUrl,
  })
);
app.use(express.json());

// Routes
// Http methods: GET, POST, PUT, PATCH, DELETE
app.get("/home", (req, res, next) => {
  res.json({
    name: "Bappaditya Sinha",
    hometown: "contai",
  });
});
app.use("/api/users", userRoute);
app.use("/api/books", bookRouter);

// Global error handler
app.use(globalErrorHandler as unknown as express.ErrorRequestHandler);

export default app;
