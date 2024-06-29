import multer from "multer";

const storage = multer.diskStorage({ //diskStorage is used to store the file in the disk storage of the server 
  destination: function (req, file, cb) { //destination is used to specify the destination where the file will be stored
    //cb is nothing but callback function here, file is what we use multer for
    cb(null, "./public/temp"); 
  },
  filename: function (req, file, cb) { //filename is used to specify the name of the file
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }); //upload is used to upload the file to the server

export { upload }; //exporting the upload function
