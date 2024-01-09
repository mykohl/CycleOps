import { prisma } from "../../server";
import { Maker } from "@prisma/client";
import { MakerDto } from "../../data/models/maker.model" 

export async function CreateMaker(makerDto: MakerDto): Promise<Maker> {
    const newMaker = await prisma.maker.create({ data: makerDto });
    return newMaker;
}

export async function FindOneMaker(makerName: string) {
    const makerLookup = await prisma.maker.findFirst({ where: { name: makerName! } });
    return makerLookup;
}