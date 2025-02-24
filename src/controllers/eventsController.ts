import { Request, Response } from "express";
import httpStatus from "http-status";
import { EventsService } from "../service/eventsService";

async function eventsPost(req: Request, res: Response) {
    const { text, day } = req.body;
    const textEvents = await EventsService.eventsPost(text, day);

    res.status(httpStatus.CREATED).send(textEvents);
}

export const eventsController = {
    eventsPost
};