import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { accessService } from '../services/AccessService';

export async function createAccess(req: Request, res: Response) {
  try {
    const access = await accessService.create(req.body);
    res.status(StatusCodes.OK).json({ access });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e });
  }
}
