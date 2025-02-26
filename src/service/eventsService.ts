import { eventsRepository } from '../repositories/eventsRepository';

async function eventsPost(text: string, day: string, userId: number) {
    const dayExists = await eventsRepository.dayExistsGet(day);
    if (dayExists.length !== 0) {
        const updateEvents = await eventsRepository.updateEventsPost(text, day);
        return updateEvents;
    }

    const registerEvents = await eventsRepository.registerEventsPost(text, day, userId);
    
    return registerEvents; 
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