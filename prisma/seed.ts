import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

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

    await prisma.events.createMany({
        data:[
            {
                text: "Quero testar se esta dando certo ",
                day: "23/02/2025",
            }
        ]
    })

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
