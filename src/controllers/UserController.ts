import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    constructor(private userBusiness: UserBusiness){}

    getUsersSince = async (req: Request, res: Response) => {
        try {
            const input = +req.body.input;
            
            const result = await this.userBusiness.getUsersSince(input)

            res.status(200).send(result);
        } catch (error: any) {
            res.send({ message: error.message }).status(error.status);
        };
    };

    getUserDetail = async (req: Request, res: Response) => {
        try {
            const { username } = req.params;

            // console.log(username)

            const result = await this.userBusiness.getUserDetail(username);

            res.status(200).send(result);
        } catch (error: any) {
            res.send({ message: error.message }).status(error.status);
        };
    };
};
