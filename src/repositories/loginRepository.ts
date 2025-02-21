import prisma from "../database/dataBase";


async function findByEmailPassword(mode: string) {
    const isCPF = (/^\d{3}\.\d{3}\.\d{3}-\d{2}$/).test(mode);
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mode);

    if (!isCPF && !isEmail) {
        throw new Error('O valor fornecido não é um CPF ou e-mail válido.');
    } else if (isCPF) {
        const user = await prisma.users.findUnique({
            where: {
                cpf: mode,
            },
        });
        return user;
    } else {
        const user = await prisma.users.findUnique({
            where: {
                email: mode,
            },
        });
        return user;
    }
}

export const loginRepository = {
    findByEmailPassword,
};