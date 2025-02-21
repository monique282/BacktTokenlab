import { PrismaClient } from '@prisma/client'

let prisma = new PrismaClient();

export function connectDb(): void {
    prisma = new PrismaClient();
}
export default prisma;