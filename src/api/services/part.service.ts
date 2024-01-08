import { prisma } from "../../server";
import { Part, Hub } from "@prisma/client";
import { PartUpsertModel, HubUpsertModel } from "../models/part.model" 
import { FindOneMaker } from "./maker.service";

export async function CreatePart(part: PartUpsertModel): Promise<Part> {
    if (part.makerUpsertModel?.name !== undefined && part.makerId === null) {
        const makerLookup = await FindOneMaker(part.makerUpsertModel?.name!);
        if (makerLookup != null) part.makerId = makerLookup.id;
    }

    const newPart: Part = await prisma.part.create({ data: part });
    return newPart;
}

export async function CreateHub(hub: HubUpsertModel): Promise<Hub> {
    hub.partUpsertModel.type = (hub.position ?? "") + "hub";
    const newPart: Part = await CreatePart(hub.partUpsertModel);
    hub.partId = newPart.id;
    const newHub: Hub = await prisma.hub.create({ data: hub });
    return newHub;
}