import { prisma } from "../server";
import { Part, Hub } from "../data/prisma/client";
import { PartDto, HubDto, RimDto } from "../data/models/part.model" 
import { MakerService } from "./maker.service";

export class PartService {
    
    public static async UpdatePart(partDto: PartDto): Promise<Part> {
        if (partDto.maker.name !== undefined && partDto.makerId === null) {
            const makerLookup = await MakerService.GetOneMaker(partDto.maker.name!);
            if (makerLookup != null) partDto.makerId = makerLookup.id;
        }

        // destruct part model to remove elements that can't be part of create.
        const { id, maker, ...partData } = partDto;

        const newPart: Part = await prisma.part.create({ data: { ...partData } });
        return newPart;
    }

    public static async UpdateHub(hubDto: HubDto): Promise<Hub> {
        hubDto.type = (hubDto.position ?? "") + "hub";
        const newPart: Part = await this.UpdatePart(hubDto);
        hubDto.partId = newPart.id;
        const newHub: Hub = await prisma.hub.create({ data: hubDto });
        return newHub;
    }
}