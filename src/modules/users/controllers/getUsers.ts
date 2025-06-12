import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { userService } from '../services/UserService';

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await userService.list();
    res.status(StatusCodes.OK).json({ users });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e });
  }
}
