/* eslint-disable @typescript-eslint/no-unused-vars */
import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandlers";

const app = express();

//Routes
//Http methods GET,POST,PUT,DELETE
app.get("/home", (req, res, next) => {
  res.json({
    name: "Bappaditya SInha",
    hometown: "contai",
  });
});

//global error handler

app.use(globalErrorHandler);
export default app;
