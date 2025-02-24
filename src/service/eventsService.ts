import { eventsRepository } from '../repositories/eventsRepository';

async function eventsPost(text: string, day: string) {
    const dayExists = await eventsRepository.dayExistsGet(day);
    console.log("dayExiste", dayExists)
    if (dayExists.length !== 0) {
        const updateEvents = await eventsRepository.updateEventsPost(text, day);
        return updateEvents;
    }

    const registerEvents = await eventsRepository.registerEventsPost(text, day);
    
    return registerEvents; 
}

export const EventsService = {
    eventsPost
};