import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { pageService } from '../services/PageService';

export async function createPage(req: Request, res: Response) {
  try {
    const page = await pageService.create(req.body);
    res.status(StatusCodes.OK).json({ page });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e });
  }
}
