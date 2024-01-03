import { prisma } from "..";
import { Maker, Part, PartHub } from "@prisma/client";

export const svcAddMaker = async(maker: Maker) => 
{
    const newMaker = await prisma.maker.create({ data: maker });
    return newMaker;
}

export const svcAddPart = async(part: Part, makerName?: string | null) => 
{
    if (makerName != undefined && makerName != null && part.makerId == null) {
        const makerLookup = await prisma.maker.findFirst({ where: { name: makerName } })
        if (makerLookup != null) part.makerId = makerLookup.id;
    }
    
    const newPart = await prisma.part.create({ data: part });
    return newPart;
}

export const svcAddHub =async (hub: PartHub) => 
{

    const newHub = await prisma.partHub.create({ data: hub })



}