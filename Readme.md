# ViewDeo | Video Streaming Platform - Backend

## Introduction
ViewDeo is an online video streaming and video sharing platform similar to YouTube where users can create and upload their own videos to their channels or watch videos from other content creators.

## Tech Stack
- Backend: Express Js, Multer
- Database: MongoDB
- Cloud Storage: Cloudinary

## Dependencies:
- [bcrypt](https://www.npmjs.com/package/bcrypt): A library for hashing passwords and comparing hashed passwords. It provides a secure way to store user passwords in the database.

- [cloudinary](https://cloudinary.com/documentation): A cloud-based media management platform that provides image and video upload, storage, manipulation, and delivery. It allows you to easily handle media files in your application.

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): A middleware that parses cookies attached to the client's request object. It simplifies the handling of cookies in Express applications.

- [cors](https://www.npmjs.com/package/cors): A middleware that enables Cross-Origin Resource Sharing (CORS) in Express applications. It allows you to control which domains can access your API.

- [dotenv](https://www.npmjs.com/package/dotenv): A module that loads environment variables from a `.env` file into `process.env`. It helps manage sensitive information and configuration settings in your application.

- [express](https://expressjs.com/): A fast and minimalist web application framework for Node.js. It provides a set of features for building web applications and APIs.

- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): A library for generating and verifying JSON Web Tokens (JWTs). JWTs are used for authentication and authorization in web applications.

- [mongoose](https://mongoosejs.com/): An Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a simple and intuitive way to interact with MongoDB databases.

- [mongoose-aggregate-paginate-v2](https://www.npmjs.com/package/mongoose-aggregate-paginate-v2): A plugin for Mongoose that adds pagination support to aggregate queries. It allows you to paginate the results of complex database queries.

- [multer](https://www.npmjs.com/package/multer): A middleware for handling multipart/form-data, which is commonly used for file uploads. It simplifies the process of handling file uploads in Express applications.

## Folder Structure
```
├── controllers
│   ├── user.controller.js 
├── db
│   ├── index.js
├── middlewares
│   ├── auth.middleware.js
│   └── multer.middleware.js
├── models
│   ├── subscription.models.js
│   └── user.models.js
│   └── video.models.js
├── routes
│   └── user.routes.js
├── app.js
├── constants.js
└── README.md
```

## .env file
```
PORT = your_local_port
MONGODB_URI = your_mongodb_uri
CORS_ORIGIN = *


ACCESS_TOKEN_SECRET = your_auth_secret
ACCESS_TOKEN_EXPIRY = 1d

REFRESH_TOKEN_SECRET = your_refreshToken_secret
REFRESH_TOKEN_EXPIRY = 10d


CLOUDINARY_CLOUD_NAME = cloudinary_name
CLOUDINARY_API_KEY = api_key
CLOUDINARY_API_SECRET = api_secret

``` 