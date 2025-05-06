
import { Router } from 'express';
import { downloadFile } from '../controllers/downloadFile';

export const getRouter = Router();

/**
 * Download a PDF file by filename.
 * Example: GET /download-pdf?filename=example_parsed.pdf
 */
getRouter.get('/download-pdf', downloadFile);
