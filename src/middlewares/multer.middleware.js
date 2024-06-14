import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //cb is nothing but callback function here, file is what we use multer for
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

export { upload };
