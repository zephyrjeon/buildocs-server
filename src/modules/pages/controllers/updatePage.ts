import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { pageService } from '../services/PageService';

export async function updatePage(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const page = await pageService.update({ id, ...req.body });
    res.status(StatusCodes.OK).json({ page });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e });
  }
}
