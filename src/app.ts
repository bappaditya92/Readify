// eslint-disable-next-line @typescript-eslint/no-unused-vars
import express, { NextFunction, Request, Response } from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { config } from "./config/config";
const app = express();


//Routes
//Http method : Get,POST,PUT,DELETE
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/', (req,res,next)=>{
    res.json({message: "welcome to elib api's"})
});

//global error handler
app.use(globalErrorHandler);


export default app;