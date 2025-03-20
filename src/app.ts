import express, { NextFunction } from 'express';
import { HttpError } from 'http-errors';
import { config } from './config/config';

const app = express();


//Routes
//Http method : Get,POST,PUT,DELETE
app.get('/', (req,res)=>{
    res.json({"sName": "Rahul", "dept": "Civil", "year": 2025})
})


//global error handler

app.use((err:HttpError,req:Request,res:Response,next:NextFunction)=>{
    const statusCode = err.statusCode || 500;

   return res.status(statusCode).json({
    message: err.message,
    errorStack: config.env ==='development'? err.stack: "",

   })


}); 

export default app;