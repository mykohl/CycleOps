import { Prisma, PrismaClient } from "@prisma/client";
import { prisma } from "../server";
import { Maker } from "../models/model.maker";

const svcAddMaker = async(maker: Maker) => {
    const newMaker = await prisma.maker.create({ data: maker });
    return newMaker;
}

module.exports = {
    svcAddMaker
}