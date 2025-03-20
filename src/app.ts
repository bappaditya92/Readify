import express, { NextFunction, Request, Response} from 'express';
import  { HttpError } from 'http-errors';
import { config } from './config/config';


const app = express();


//Routes
//Http method : Get,POST,PUT,DELETE
app.get('/', (req,res)=>{
    // throw new error("something went wrong...")
    const error = createHttpError(400, "someting went wrong")
    throw error;
    res.json({message: "welcome to elib api's"})
})


//global error handler

app.use((err: HttpError,req:Request,res:Response,next:NextFunction)=>{
    const statusCode = err.statusCode || 500;

   return res.status(statusCode).json({
    message: err.message,
    errorStack: config.env ==='development'? err.stack: "",

   })


}); 

export default app;