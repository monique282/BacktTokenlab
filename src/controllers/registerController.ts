import { Request, Response } from "express";
import httpStatus from "http-status";
import { RegisterService } from "../service/registerService";

async function registerPost(req: Request, res: Response) {
    const { name, password, cpf, email } = req.body;
    const user = await RegisterService.registerPost(name, password, cpf, email);

    res.status(httpStatus.CREATED).send(user);
}

export const registerController = {
    registerPost
};