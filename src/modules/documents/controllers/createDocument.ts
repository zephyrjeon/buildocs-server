import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { documentService } from '../services/DocumentService';

export async function createDocument(req: Request, res: Response) {
  try {
    const ownerId = parseInt(req.body.ownerId);
    const document = await documentService.create(ownerId);
    res.status(StatusCodes.OK).json({ document });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e });
  }
}
