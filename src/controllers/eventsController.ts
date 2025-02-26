import { Response } from "express";
import httpStatus from "http-status";
import { EventsService } from "../service/eventsService";
import { AuthenticatedRequest } from "../middlewares/authenticationTokenMiddleware";


async function eventsPost(req: AuthenticatedRequest, res: Response) {
    const { text, day, startTime, endTime } = req.body;
    const { userId } = req;

    if (!userId) {
        return res.status(httpStatus.UNAUTHORIZED).send({ message: "Usuário não autenticado." });
    }

    const textEvents = await EventsService.eventsPost(text, day, userId, startTime, endTime);
    res.status(httpStatus.CREATED).send(textEvents);
};

async function eventsGet(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;

    if (!userId) {
        return res.status(httpStatus.UNAUTHORIZED).send({ message: "Usuário não autenticado." });
    }

    const textEvents = await EventsService.eventsGet(userId);
    res.status(httpStatus.OK).send(textEvents);
};

async function eventsDelete(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    const id = Number(req.params.id);
    if (!userId) {
        return res.status(httpStatus.UNAUTHORIZED).send({ message: "Usuário não autenticado." });
    }

    const textEvents = await EventsService.eventsDelete(id);
    res.status(httpStatus.OK).send(textEvents);
};

async function eventsUpdate(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    const id = Number(req.params.id);
    const { text, startTime, endTime } = req.body;
    const textEvents = await EventsService.eventsUpdate(id, text, startTime, endTime);
    res.status(httpStatus.OK).send(textEvents);
}


export const eventsController = {
    eventsPost,
    eventsGet,
    eventsDelete,
    eventsUpdate
};