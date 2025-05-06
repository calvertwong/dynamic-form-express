import { Request, Response } from "express";
import path from "path";
import fs from "fs";

export const downloadFile = async (req: Request, res: Response) => {
  const { filename } = req.query;

  if (!filename || typeof filename !== 'string') {
    res.status(400).json({ error: 'Filename query parameter is required.' });
    return;
  }

  // Adjust the uploads directory path as needed
  const uploadsDir = path.resolve(__dirname, '../uploads');
  const filePath = path.join(uploadsDir, filename);

  // Check if file exists before attempting to send
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).json({ error: 'File not found.' });
      return;
    }
    res.download(filePath, filename, (downloadErr) => {
      if (downloadErr) {
        res.status(500).json({ error: 'Error downloading file.' });
      }
    });
  });
}