import bcrypt from 'bcrypt';
import { invalidCredentialsError } from '../erros/invalidCredentialsError';
import { registerRepository } from '../repositories/registerRepository';

async function eventsPost(text: string, day: string) {
    const dayExists = await eventsRepository.dayExistsGet(day);
    if (dayExists) {
        const updateEvents = await eventsRepository.updateEventsPost(text);
    }

    const registerEvents = await eventsRepository.registerEventsPost(text, day);
    
    return registerEvents;
}

export const EventsService = {
    eventsPost
};