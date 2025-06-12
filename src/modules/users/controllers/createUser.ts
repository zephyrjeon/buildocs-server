import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { userService } from '../services/UserService';

export async function createUser(req: Request, res: Response) {
  try {
    const user = await userService.create(req.body);
    res.status(StatusCodes.OK).json({ user });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e });
  }
}
