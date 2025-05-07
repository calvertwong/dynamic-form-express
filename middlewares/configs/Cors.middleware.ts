
import "dotenv/config";
import { app } from "../../server";
import cors from "cors";

export const Cors = () => {
  const whitelist = process.env.UI_URL;

  const corsOptions = {
    origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
      if (!origin) return callback(null, true);
      if (whitelist && origin === whitelist) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  };

  app.use(cors(corsOptions));
};
