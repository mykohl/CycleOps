import { Prisma, PrismaClient } from "@prisma/client";
import { prisma } from "./server";

class partService {

    async createMaker(name: string, notes?: string) {
        const newMaker = prisma.maker.create({
            data: { name, notes }
        });
    }
}

export default {
    partService
}