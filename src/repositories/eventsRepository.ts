import prisma from "../database/dataBase";

async function dayExistsGet(day: string) {
    const result = await prisma.events.findMany({
        where: {
            day
        },
    });

    return result;
}

async function updateEventsPost(text: string, day: string) {
    const result = await prisma.events.updateMany({
        where: { day },
        data: { text }
    });
    return result;
}

async function registerEventsPost(text: string, day: string) {
    const result = await prisma.events.create({
        data: {
            text,
            day
        },
    });
    return result; 
}

export const eventsRepository = {
    dayExistsGet,
    updateEventsPost,
    registerEventsPost
};