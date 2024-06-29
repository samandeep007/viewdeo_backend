import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; //file system in node: built in library: Read documentation

//documentation: https://cloudinary.com/documentation/node_integration
//fs: https://nodejs.org/api/fs.html

//fs is a built-in library in node.js to work with the file system. It provides a lot of file system related functionality. it is used to read and write files.

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View Credentials' below to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log(response)
    fs.unlinkSync(localFilePath); //remove the file locally once uploaded

    //File has been uploaded successfully
    console.log("File is uploaded on cloudinary ", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};


export {uploadOnCloudinary}