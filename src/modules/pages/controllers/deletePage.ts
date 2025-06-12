import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { pageService } from '../services/PageService';

export async function deletePage(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const page = await pageService.delete(id);
    res.status(StatusCodes.OK).json({ page });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e });
  }
}
