import { prisma } from "../../server";
import { Maker } from "@prisma/client";
import { MakerUpsertModel } from "../../data/models/maker.model" 

export async function CreateMaker(makerUpsertModel: MakerUpsertModel): Promise<Maker> {
    const newMaker = await prisma.maker.create({ data: makerUpsertModel });
    return newMaker;
}

export async function FindOneMaker(makerName: string) {
    const makerLookup = await prisma.maker.findFirst({ where: { name: makerName! } });
    return makerLookup;
}