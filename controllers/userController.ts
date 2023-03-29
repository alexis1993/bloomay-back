import express, { Request, Response } from 'express';
import { IUser } from '../interfaces/userInterface';
import { getUsers } from '../services/userService';

const userRouter = express.Router();

userRouter.get('/', async (req: Request, res: Response) => {
    const users : Array<IUser> = await getUsers()
    res.status(200).send({users});
});

export default userRouter;

  