//require('dotenv').config({path: './env}) // CommonJS require syntax
import "dotenv/config"; //We should configure all the environment variables in the file we are going to run first to make sure that the variables are available throughout the application
import connectDB from "./db/index.js";


connectDB();




























/* APPROACH 1
import mongoose from "mongoose";
import "dotenv/config";
import { DB_Name } from "./constants.js";
import express from 'express';

const app = express();
//Always use try-catch and async await while connecting to the database because Hitesh sir says your database is always in other continent

;(async () => {  //Its a good approach to use a semi colon before these types of function in order to prevent errors
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);  //await mongoose.connect(URI/database_name) is used to connect to the database
    console.log("Connection to the database is successful!");
    
    app.on("Error", (error)=>{
        console.log("ERRR: ", err);
        throw error;
    })

    app.listen(process.env.PORT || 4040, () => {
        console.log(`App is listening at port: ${process.env.PORT}`)
    })

  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();

*/
