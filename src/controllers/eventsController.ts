import { Request, Response } from "express";
import httpStatus from "http-status";
import { RegisterService } from "../service/registerService";

async function eventsPost(req: Request, res: Response) {
    const { text } = req.body;
    const textEvents = await EventsService.eventsPost(text);

    res.status(httpStatus.CREATED).send(eventsPost);
}

export const eventsController = {
    eventsPost
};