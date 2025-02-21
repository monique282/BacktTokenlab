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
