import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { accessService } from '../services/AccessService';

export async function deleteAccess(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const user = await accessService.delete(id);
    res.status(StatusCodes.OK).json({ user });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e });
  }
}
