import { NextFunction, Request, Response } from "express";
import { uploadToMemory } from "./common-multer-code";
import multer from "multer";

export const SingleFileUpload = (fieldName: string) => {
  return function (req: Request, res: Response, next: NextFunction) {
    uploadToMemory.single(fieldName)(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        console.log('single-file-upload.ts ~ Line 9 ~ Variable (err): ', err)
        res.status(500).json('Multer error')
      } else if (err instanceof Error) {
        res.status(500).json('Error')
      } else if (err) {
        res.status(500).json('Some error')
      } else if (!req.file) {
        res.status(400).json('No file is uploaded')
      } else {
        next();
      }
    });
  };
}