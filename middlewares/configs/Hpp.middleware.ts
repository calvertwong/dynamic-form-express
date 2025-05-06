import hpp from "hpp"
import { app } from "../../server"

export const Hpp = () => {
  app.use(hpp())
}