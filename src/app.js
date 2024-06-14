import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
//Read CORS documentation at this point for more information

app.use(
  express.json({
    limit: "16kb", //maximum size of the payload
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" })); //space is encoded as %20 in url, to prevent that we use express.urlencoded()
app.use(express.static("public")); //public is the name of the folder
app.use(cookieParser());


//routes

import userRouter from './routes/user.routes.js';


//routes declaration
app.use("/api/v1/users", userRouter) //middleware || standard practice to use version 
// http:localhost:{port}/api/v1/user/route

export { app };
