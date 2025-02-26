import prisma from "../database/dataBase";

async function dayExistsGet(day: string) {
    const result = await prisma.events.findMany({
        where: {
            day
        },
    });

    return result;
}

async function registerEventToDay(text: string, day: string, userId: number, startTime: string, endTime: string) {
    const newEvent = await prisma.event.create({
        data: {
            text,
            startTime,
            endTime
        }
    });

    await prisma.events.create({
        data: {
            userId,
            eventId: newEvent.id,
            day
        }
    })
    
    return [newEvent];
}


async function eventsGet(userId: number) {
    const eventsForDay = await prisma.events.findMany({
        where: {
            userId,
        },
        include: {
            event: true
        }
    });

    const groupedEvents = eventsForDay.reduce((acc, event) => {
        const { day } = event;

        if (!acc[day]) {
            acc[day] = {
                id: event.id,
                userId: event.userId,
                eventId: event.eventId,
                day: event.day,
                createdAt: event.createdAt,
                updatedAt: event.updatedAt,
                events: [] 
            };
        }

        acc[day].events.push(event.event);

        return acc;
    }, {} as Record<string, any>);

    return [Object.values(groupedEvents)];
}


async function eventsDelete(userId: number, id: number) {
    const result = await prisma.events.deleteMany({
        where: {
            userId,
            id
        }
    });
    return result;
}

export const eventsRepository = {
    dayExistsGet,
    registerEventToDay,   
    eventsGet,
    eventsDelete
};