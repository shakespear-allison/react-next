import mongoose from "mongoose";
import React from "react";

const connectDB = () => {
  return mongoose.connect("http://localhost:27017/blog_minning");
};

export default connectDB;
