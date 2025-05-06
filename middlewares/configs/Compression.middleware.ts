import compression from "compression"
import { app } from "../../server"

export const Compression = () => {
  app.use(compression())
}