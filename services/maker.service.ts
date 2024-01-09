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

    public static async GetOneMaker(makerKey: string): Promise<Maker | null> {
        const makerId = parseInt(makerKey);
        const conditions = !isNaN(makerId)
            ? { id: makerId }
            : { OR: [{ name: makerKey }, { nameShort: makerKey }, { nameAbbreviation: makerKey }] };
        const makerLookup = await prisma.maker.findFirst({ where: conditions });

        return makerLookup;
    }
}