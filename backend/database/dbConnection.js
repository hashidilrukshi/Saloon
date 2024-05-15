import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "RESTURENT"
    }).then(()=>{
        console.log("Connected to database successfully");
    }).catch(err=>{
        console.log(`Some Error occurred while connecdting database! ${err}`);
    })
}