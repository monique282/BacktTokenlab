import { eventsRepository } from '../repositories/eventsRepository';

async function eventsPost(text: string, day: string, userId: number, startTime: string, endTime: string) {
        const newEvent = await eventsRepository.registerEventToDay(text, day, userId, startTime, endTime);
        return newEvent;
    
}


async function eventsGet(userId: number) {
    const events = await eventsRepository.eventsGet(userId);
    return events;
}

async function eventsDelete(userId: number, id: number) {
    const events = await eventsRepository.eventsDelete(userId, id);
    return events;
}

export const EventsService = {
    eventsPost,
    eventsGet,
    eventsDelete
};