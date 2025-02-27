import { eventsRepository } from '../repositories/eventsRepository';

async function eventsPost(text: string, day: string, userId: number, startTime: string, endTime: string) {
    const newEvent = await eventsRepository.registerEventToDay(text, day, userId, startTime, endTime);
    return newEvent;
};

async function eventsGet(userId: number) {
    const events = await eventsRepository.eventsGet(userId);
    return events;
};

async function eventsDelete(id: number) {
    const events = await eventsRepository.eventsDelete(id);
    return events;
};

async function eventsUpdate(id: number, text: string, startTime: string, endTime: string) {
    const events = await eventsRepository.eventsUpdate(id, text, startTime, endTime);
    return events;
};

export const EventsService = {
    eventsPost,
    eventsGet,
    eventsDelete,
    eventsUpdate
};