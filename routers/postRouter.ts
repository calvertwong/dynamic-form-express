import { Router } from 'express';
import { parsePdf } from '../controllers/parsePdf';
import { SingleFileUpload } from '../middlewares/multer/single-file-upload';
import { login } from '../controllers/login';

export const postRouter = Router();

postRouter.post('/parse-pdf', SingleFileUpload('singlePdf'), parsePdf);
postRouter.post('/login', login);