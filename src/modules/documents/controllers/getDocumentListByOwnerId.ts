import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { documentService } from '../services/DocumentService';

export async function getDocumentListByOwnerId(req: Request, res: Response) {
  try {
    const ownerId = parseInt(req.body.ownerId);
    const list = await documentService.getListByOwnerId(ownerId);
    res.status(StatusCodes.OK).json({ list });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e });
  }
}
