import { prisma } from "../../server";
import { Part, Hub } from "../../data/prisma/client";
import { PartDto, HubDto, RimDto } from "../../data/models/part.model" 
import { FindOneMaker } from "./maker.service";

export async function CreatePart(partDto: PartDto): Promise<Part> {
    if (partDto.maker.name !== undefined && partDto.makerId === null) {
        const makerLookup = await FindOneMaker(partDto.maker.name!);
        if (makerLookup != null) partDto.makerId = makerLookup.id;
    }

    // destruct part model to remove elements that can't be part of create.
    const { id, maker, ...partData } = partDto;

    const newPart: Part = await prisma.part.create({ data: { ...partData } });
    return newPart;
}

export async function CreateHub(hubDto: HubDto): Promise<Hub> {
    hubDto.type = (hubDto.position ?? "") + "hub";
    const newPart: Part = await CreatePart(hubDto);
    hubDto.partId = newPart.id;
    const newHub: Hub = await prisma.hub.create({ data: hubDto });
    return newHub;
}