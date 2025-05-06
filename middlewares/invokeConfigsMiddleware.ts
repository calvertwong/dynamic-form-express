import { Compression } from "./configs/Compression.middleware";
import { ExpressParser } from "./configs/ExpressParser.middleware";
import { Helmet } from "./configs/Helmet.middleware";
import { Hpp } from "./configs/Hpp.middleware"

export const invokeConfigsMiddleware = () => {
  Hpp();
  ExpressParser();
  Helmet();
  Compression();
}