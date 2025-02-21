import prisma from "../database/database";

async function sessionToken(token: string, id: number) {
    const session = await prisma.session.create({
        data: {
            token: token,
            userId: id,
        },
        select: {
            token: true,
        },
    });
    return session;
}



export const sessionRepository = {
    sessionToken,
};