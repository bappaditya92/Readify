import express from 'express';

const app = express();

//Routes
//Http method : Get,POST,PUT,DELETE
app.get('/', (req,res)=>{
    res.json({"sName": "Rahul", "dept": "Civil", "year": 2025})
})

export default app;