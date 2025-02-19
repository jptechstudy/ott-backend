import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

dotenv.config({ path: "./.env" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCludinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("file is uploaded on cloudinary ", response);
    return response;
  } catch (error) {
    console.log("uploadOnCludinary_Error", error);
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCludinary };
