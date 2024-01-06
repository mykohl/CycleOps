import { prisma } from "../../server";
import { Maker, Part, Hub } from "@prisma/client";
import { MakerUpsertModel, PartUpsertModel, HubUpsertModel } from "../models/parts.model" 

async function CreateMaker(maker: MakerUpsertModel): Promise<Maker> {
    const newMaker: Maker = await prisma.maker.create({ data: maker });
    return newMaker;
}

async function CreatePart(part: PartUpsertModel): Promise<Part> {
    if (part.makerUpsertModel?.name != undefined && part.makerUpsertModel?.name != null && part.makerId == null) {
        const makerLookup = await FindOneMaker(part.makerUpsertModel?.name);
        if (makerLookup != null) part.makerId = makerLookup.id;
    }

    const newPart: Part = await prisma.part.create({ data: part });
    return newPart;
}

async function CreateHub(hub: HubUpsertModel): Promise<Hub> {
    const newPart: Part = await CreatePart(hub.partUpsertModel);
    hub.partId = newPart.id;
    const newHub: Hub = await prisma.hub.create({ data: hub });
    return newHub;
}

async function FindOneMaker(makerName: string) {
    const makerLookup = await prisma.maker.findFirst({ where: { name: makerName } });
    return makerLookup;
}

export default {
    CreateMaker,
    CreatePart,
    CreateHub,
    FindOneMaker
}