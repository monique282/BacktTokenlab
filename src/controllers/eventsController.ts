import { Request, Response } from "express";
import httpStatus from "http-status";
import { EventsService } from "../service/eventsService";
import { AuthenticatedRequest } from "../middlewares/authenticationTokenMiddleware";


async function eventsPost(req: AuthenticatedRequest, res: Response) {
    const { text, day } = req.body;
    const { userId } = req;

    if (!userId) {
        return res.status(httpStatus.UNAUTHORIZED).send({ message: "Usuário não autenticado." });
    }

    const textEvents = await EventsService.eventsPost(text, day, userId);
    res.status(httpStatus.CREATED).send(textEvents);
}

async function eventsGet(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;

    if (!userId) {
        return res.status(httpStatus.UNAUTHORIZED).send({ message: "Usuário não autenticado." });
    }

    const textEvents = await EventsService.eventsGet(userId);
    res.status(httpStatus.OK).send(textEvents);
}


export const eventsController = {
    eventsPost,
    eventsGet
};