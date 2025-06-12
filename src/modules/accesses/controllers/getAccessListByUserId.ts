import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { accessService } from '../services/AccessService';

export async function getAccessListByUserId(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const list = await accessService.getListByUserId(id);
    res.status(StatusCodes.OK).json({ list });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e });
  }
}
