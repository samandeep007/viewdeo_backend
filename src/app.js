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
//CORS is a security feature in browsers that prevents requests from one domain to another domain.
//Read CORS documentation at this point for more information

//middleware
app.use(
  express.json({
    limit: "16kb", //limiting the size of the payload to 16kb
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" })); //space is encoded as %20 in url, to prevent that we use express.urlencoded()
//urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app.use(express.urlencoded()), where app is an instance of an express application.


app.use(express.static("public")); //public is the name of the folder
//.static() is a method inbuilt in express to serve static files. We are telling express to serve static files from the public folder.


app.use(cookieParser());
//cookieParser() is a method inbuilt in express to parse the incoming cookies from the client. It parses the Cookie header and populates req.cookies with an object keyed by the cookie names.

//routes
import userRouter from './routes/user.routes.js';


//routes declaration
app.use("/api/v1/users", userRouter) //middleware || standard practice to use version 
// http:localhost:{port}/api/v1/user/route

export { app };
