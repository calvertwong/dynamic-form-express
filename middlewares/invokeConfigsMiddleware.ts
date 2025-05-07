import { Compression } from "./configs/Compression.middleware";
import { Cors } from "./configs/Cors.middleware";
import { ExpressParser } from "./configs/ExpressParser.middleware";
import { Helmet } from "./configs/Helmet.middleware";
import { Hpp } from "./configs/Hpp.middleware"
import { ResponseHeader } from "./configs/ResponseHeader.middleware";

export const invokeConfigsMiddleware = () => {
  Hpp();
  ExpressParser();
  Helmet();
  Compression();
  Cors();
  ResponseHeader();
}