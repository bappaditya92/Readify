import {config} from "./src/config/config"
import app from "./src/app";
import dbConnect from "./src/config/db";

const startServer = async()=>{
    //connect Database
    await dbConnect();
    const port = config.port || 3000;
    app.listen(port, ()=>{
        console.log(`server is running on ${port}`);
        
    })
}

startServer();