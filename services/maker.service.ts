import { prisma } from "../server";
import { Maker } from "@prisma/client";
import { MakerDto } from "../data/models/maker.model"

export class MakerService {

    public static async updateMaker(makerDto: MakerDto): Promise<Maker | null> {
        const maker = await prisma.maker.upsert({
            where: { id: makerDto.id },
            update: makerDto,
            create: makerDto
        });

        return maker;
    }

    public static async findMaker(makerKey: number | string | MakerDto): Promise<Maker | null> {
        if(typeof makerKey === "number") return this.findMakerById(makerKey);
        if (typeof makerKey === "string") return this.findMakerByString(makerKey);
        return this.findMakerByDto(makerKey);
    }

    private static async findMakerById(makerKey: number): Promise<Maker | null> {
        const makerLookup = await prisma.maker.findFirst({ where: { id: makerKey } });
        return makerLookup;
    }

    private static async findMakerByString(makerKey: string): Promise<Maker | null> {
        const makerId = parseInt(makerKey);
        if(!isNaN(makerId)) return this.findMakerById(makerId);
        const makerLookup = await prisma.maker.findFirst({
            where: { OR: [
                { name: makerKey as string }, 
                { nameShort: makerKey as string }, 
                { nameAbbreviation: makerKey as string }
            ] }
        });
        return makerLookup;
    }

    private static async findMakerByDto(makerKey: MakerDto): Promise<Maker | null> {
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