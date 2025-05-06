import helmet from "helmet"
import { app } from "../../server"

export const Helmet = () => {
  app.use(helmet());
}