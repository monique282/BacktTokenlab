import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Criar usuários
    await prisma.users.createMany({
        data: [
            {
                email: 'm@gmail.com',
                cpf: '555.555.555-57',
                password: '$2b$12$RBPyrSMsrg30WlriZcmfheYQkZ/jC0xwx4S2zEv6MqbFuV1T9jDAu',
                name: 'Monique',
            },
            {
                email: 'm2@gmail.com',
                cpf: '555.555.555-55',
                password: '$2b$12$RBPyrSMsrg30WlriZcmfheYQkZ/jC0xwx4S2zEv6MqbFuV1T9jDAu',
                name: 'Andressa',
            },
        ],
        skipDuplicates: true,
    });

    const user = await prisma.users.findFirst({
        where: { email: 'm@gmail.com' },
    });

    if (user) {
        const event = await prisma.event.create({
            data: {
                text: "Quero testar se está dando certo",
                startTime: "08:55",
                endTime: "09:50",
            },
        });

        await prisma.events.create({
            data: {
                userId: user.id,
                eventId: event.id,
                day: "2025/02/23",
            },
        });

    } else {
        console.error('Usuário não encontrado');
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error('Erro ao executar o seed:', e);
        await prisma.$disconnect();
        process.exit(1);
    });
