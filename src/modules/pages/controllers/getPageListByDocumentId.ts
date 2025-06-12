import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { pageService } from '../services/PageService';

export async function getPageListByDocumentId(req: Request, res: Response) {
  try {
    const documentId = parseInt(req.body.documentId);
    const list = await pageService.getListByDocumentId(documentId);
    res.status(StatusCodes.OK).json({ list });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e });
  }
}
