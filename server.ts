import 'dotenv/config';
import express from 'express';
import { invokeConfigsMiddleware } from './middlewares/invokeConfigsMiddleware';
import { postRouter } from './routers/postRouter';
import { getRouter } from './routers/getRouter';
import { verifyApiKey } from './middlewares/verifyApiKey';

export const app = express();
const port = process.env.PORT ?? 3000;

invokeConfigsMiddleware();

app.use(verifyApiKey)

app.use(postRouter);
app.use(getRouter);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
