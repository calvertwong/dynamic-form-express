import { Request } from "express";
import multer, { FileFilterCallback } from "multer";

const fileFilter = (_: Request, file: Express.Multer.File, callback: FileFilterCallback): void => {
  // Allow PDF only
  if (file.mimetype !== "application/pdf") {
     callback(new Error("PDF file format only!"));
   } else {
    callback(null, true);
   }
};

// if storing file locally is not desired, store file in buffer
const memoryStorage = multer.memoryStorage()
export const uploadToMemory = multer({storage: memoryStorage, fileFilter: fileFilter})