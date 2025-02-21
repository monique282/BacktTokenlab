import { Request, Response } from "express";
import httpStatus from "http-status";

async function loginPost(req: Request, res: Response) {
    const { mode, password } = req.body;
    const user = await LoginService.loginPost({ mode, password });

    res.status(httpStatus.OK).send(user);
}

export const loginController = {
    loginPost
};