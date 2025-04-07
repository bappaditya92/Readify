/* eslint-disable @typescript-eslint/no-unused-vars */

import express, { NextFunction, Request, Response } from "express";
import globalErrorHandler from "./middlewares/globalErrorHandlers";

import { config } from "./config/config";

const app = express();

app.use(express.json());

// Routes
// Http methods: GET, POST, PUT, PATCH, DELETE
app.get("/home", (req, res, next) => {
  res.json({
    name: "Bappaditya Sinha",
    hometown: "contai",
  });
});

// Global error handler
app.use(globalErrorHandler as unknown as express.ErrorRequestHandler);

export default app;
