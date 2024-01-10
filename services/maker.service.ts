import { prisma } from "../server";
import { Maker } from "@prisma/client";
import { MakerDto } from "../data/models/maker.model"

export class MakerService {

    public static async UpdateMaker(makerDto: MakerDto): Promise<Maker | null> {
        const maker = await prisma.maker.upsert({
            where: { id: makerDto.id },
            update: makerDto,
            create: makerDto
        });

        return maker;
    }

    public static async FindMaker(makerKey: string | number | MakerDto): Promise<Maker | null> {
        if (typeof makerKey === "number" || typeof makerKey === "string") {
            const makerId = typeof makerKey === "number" ? makerKey : parseInt(makerKey);
            const conditions = !isNaN(makerId)
                ? { id: makerId }
                : { OR: [
                    { name: makerKey as string }, 
                    { nameShort: makerKey as string }, 
                    { nameAbbreviation: makerKey as string }
                ]};
    
            const makerLookup = await prisma.maker.findFirst({ where: conditions });
            return makerLookup;
        }
    
        const makerLookup = await prisma.maker.findFirst({
            where: { 
                OR: [
                    { id: makerKey.id },
                    { name: makerKey.name },
                    { nameShort: makerKey.nameShort },
                    { nameAbbreviation: makerKey.nameAbbreviation }
                ]
            }
        });
    
        return makerLookup;
    }
    
}