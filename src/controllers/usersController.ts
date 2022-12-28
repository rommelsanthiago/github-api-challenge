import { Request, Response } from "express";

export class UsersController {
    getHello (req: Request, res: Response) {
        try {
            res.status(200).send({message: "Hello world"})
        } catch (error: any) {
            res.send({ message: error.message }).status(error.status);
        }
    }
};
