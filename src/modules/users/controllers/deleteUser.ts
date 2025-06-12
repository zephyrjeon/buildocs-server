import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { userService } from '../services/UserService';

export async function deleteUser(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const user = await userService.delete(id);
    res.status(StatusCodes.OK).json({ user });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e });
  }
}
