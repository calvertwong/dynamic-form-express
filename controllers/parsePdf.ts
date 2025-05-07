import { Request, Response } from "express";
import path from "path";
import fs from "fs/promises";
import { processPdf } from "@calvertwong/pdf-fields-extractor";

export const parsePdf = async (req: Request, res: Response) => {
  const { editedPdfBytes, finalJson } = await processPdf({
    fileBytes: req.file!.buffer,
    questions: typeof req.body.questions === 'string' ? JSON.parse(req.body.questions) : req.body.questions,
    customMetaData: [
      { "Modified By": "Test User" }
    ]
  })

  const uploadsDir = path.resolve(__dirname, "../uploads");
  await fs.mkdir(uploadsDir, { recursive: true });

  const { name, ext } = path.parse(req.file!.originalname);
  const editedFilename = `${name}_parsed${ext}`;
  const editedFilePath = path.join(uploadsDir, editedFilename);
  fs.writeFile(editedFilePath, editedPdfBytes);

  res.json(
    {
      finalJson,
      downloadFileName: editedFilename
    }
  )
}