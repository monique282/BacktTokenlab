import prisma from "../database/dataBase";

async function registerPost(name: string, hashedPassword: string, cpf: string, email: string) {
    const result = await prisma.users.create({
        data: {
            name,
            password: hashedPassword,
            cpf,
            email
        },
    });

    return result;
}

async function searchingEmail(email: string) {
    const result = await prisma.users.findUnique({
        where: {
            email
        },
    });
    return result
}

async function searchingCpf(cpf: string) {
    const result = await prisma.users.findUnique({
        where: {
            cpf
        },
    });
    return result
}

export const registerRepository = {
    registerPost,
    searchingEmail,
    searchingCpf
};