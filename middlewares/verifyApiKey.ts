import "dotenv/config";
import { NextFunction, Request, Response } from "express";

export const verifyApiKey = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.header('x-api-key');

  if(!apiKey) {
    res.status(401).json("Api key is required")
    return;
  }

  if(apiKey === process.env.API_KEY) {
    next();
  } else {
    res.status(401).json("Bad api key")
  }
}