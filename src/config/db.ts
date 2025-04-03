import mongoose from 'mongoose';
import {config} from "./config"

const connectDb = async() =>{

    try{
        mongoose.connect(config.databaseUrl as string);
        mongoose.connection.on('connected', ()=>{
            console.log("database connected successfully...");
            
        })
        
        mongoose.connection.on('error',(err)=>{
            console.log("error in connection in database...", err);
            
        })
   
    }
    catch(err){
        console.log("failed to connect to database");
        process.exit(1);
        
    }
    

}
export default connectDb;