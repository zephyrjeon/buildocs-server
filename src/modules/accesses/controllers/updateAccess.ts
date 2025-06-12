import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { accessService } from '../services/AccessService';

export async function updateAccess(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const user = await accessService.update({ id, ...req.body });
    res.status(StatusCodes.OK).json({ user });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e });
  }
}
