import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    avatar: {
      type: String, // Cloudinary url
      required: true,
    },

    coverImage: {
      type: String, //Cloudinary url
    },

    watchHistory: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Video",
        },
      ],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },

    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);


userSchema.pre("save", async function(next) { // Hashing password before saving
    if(!this.isModified("password")) return next(); // If password is not modified, skip this
    this.password = await bcrypt.hash(this.password, 10); // Hashing password
    next(); // Move to the next middleware
})


userSchema.methods.isPasswordCorrect = async function(password){ 
  console.log("Your password is ", password)
    return await bcrypt.compare(password, this.password) // Comparing password using bcrypt inbuilt method
}

//AccessTokens are used to authenticate the user and access protected routes and RefreshTokens are used to generate new AccessTokens when the old one expires.
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(  // Generating access token
        {
            _id: this._id,  
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}


userSchema.methods.generateRefreshToken = function(){ // Generating refresh token
   return jwt.sign(
    {
        _id : this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
   )
}

export const User = mongoose.model("User", userSchema);
