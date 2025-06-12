import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { documentService } from '../services/DocumentService';

export async function updateDocument(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const document = await documentService.update({ id, ...req.body });
    res.status(StatusCodes.OK).json({ document });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e });
  }
}
