import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { userService } from '../services/UserService';

export async function updateUser(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const user = await userService.update({ id, ...req.body });
    res.status(StatusCodes.OK).json({ user });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e });
  }
}
