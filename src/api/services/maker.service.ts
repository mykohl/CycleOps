import { prisma } from "../../server";
import { Maker } from "@prisma/client";
import { MakerUpsertModel } from "../models/maker.model" 

export async function CreateMaker(maker: MakerUpsertModel): Promise<Maker> {
    const newMaker: Maker = await prisma.maker.create({ data: maker });
    return newMaker;
}

export async function FindOneMaker(makerName: string) {
    const makerLookup = await prisma.maker.findFirst({ where: { name: makerName } });
    return makerLookup;
}