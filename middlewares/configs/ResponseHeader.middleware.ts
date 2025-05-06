import { NextFunction, Request, Response } from "express"
import { app } from "../../server"

export const ResponseHeader = () => {
  app.use((_: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", ["*"]);
    res.header("Access-Control-Allow-Methods", "POST, OPTION");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType, Content-Type, Accept, Authorization, userid");
    res.setHeader("content-type", "application/javascript");
    next();
  })
}