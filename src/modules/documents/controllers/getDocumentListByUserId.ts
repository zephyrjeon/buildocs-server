import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { documentService } from '../services/DocumentService';

export async function getDocumentListByUserId(req: Request, res: Response) {
  try {
    const userId = parseInt(req.body.userId);
    const list = await documentService.getListByUserId(userId);
    res.status(StatusCodes.OK).json({ list });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e });
  }
}
