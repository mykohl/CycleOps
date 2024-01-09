import { prisma } from "../../server";
import { Part, Hub } from "../../data/prisma/client";
import { PartUpsertModel, HubUpsertModel, RimUpsertModel } from "../../data/models/part.model" 
import { FindOneMaker } from "./maker.service";

export async function CreatePart(part: PartUpsertModel ): Promise<Part> {
    if (part.makerName !== undefined && part.makerId === null) {
        const makerLookup = await FindOneMaker(part.makerName!);
        if (makerLookup != null) part.makerId = makerLookup.id;
    }

    const { id, ...partData } = part;
    const newPart: Part = await prisma.part.create({ data: { ...partData } });
    return newPart;
}

export async function CreateHub(hub: HubUpsertModel): Promise<Hub> {
    hub.type = (hub.position ?? "") + "hub";
    const newPart: Part = await CreatePart(hub);
    hub.partId = newPart.id;
    const newHub: Hub = await prisma.hub.create({ data: hub });
    return newHub;
}