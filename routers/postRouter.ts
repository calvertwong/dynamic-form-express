import { Router } from 'express';
import { parsePdf } from '../controllers/parsePdf';
import { SingleFileUpload } from '../middlewares/multer/single-file-upload';

export const postRouter = Router();

postRouter.post('/parse-pdf', SingleFileUpload('singlePdf'), parsePdf);