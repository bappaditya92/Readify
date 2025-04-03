import express from 'express';

const app = express();

//Routes
//Http methods GET,POST,PUT,DELETE
app.get('/home', (req,res)=>{
    res.json({
        "name":"Bappaditya SInha",
        "hometown":"contai",
        "street":"kumarpur"
    })
})

export default app;
