import { prisma } from "../server";
import { Maker } from "@prisma/client";
import { ProducerDto } from "../data/models/producer.model"
import { List } from "lodash";

export class ProducerService {

    public static async updateMaker(makerDto: ProducerDto): Promise<Maker | null> {
        const maker = await prisma.producer.upsert({
            where: { id: makerDto.id },
            update: makerDto,
            create: makerDto
        });

        return maker;
    }

    public static async getAllMakers(): Promise<Maker[] | null> {
        const makersResult = await prisma.producer.findMany();
        return makersResult;
    }

    public static async findMaker(makerKey: number | string | ProducerDto): Promise<Maker | null> {
        if(typeof makerKey === "number") return this.findMakerById(makerKey);
        if (typeof makerKey === "string") return this.findMakerByString(makerKey);
        return this.findMakerByDto(makerKey);
    }

    private static async findMakerById(makerKey: number): Promise<Maker | null> {
        const makerLookup = await prisma.producer.findFirst({ where: { id: makerKey } });
        return makerLookup;
    }

    private static async findMakerByString(makerKey: string): Promise<Maker | null> {
        const makerId = parseInt(makerKey);
        if(!isNaN(makerId)) return this.findMakerById(makerId);
        const makerLookup = await prisma.producer.findFirst({
            where: { OR: [
                { name: makerKey as string }, 
                { nameShort: makerKey as string }, 
                { nameAbbreviation: makerKey as string }
            ] }
        });
        return makerLookup;
    }

    private static async findMakerByDto(producerKey: ProducerDto): Promise<Maker | null> {
        const makerLookup = await prisma.producer.findFirst({
            where: { 
                OR: [
                    { id: producerKey.id },
                    { name: producerKey.name },
                    { nameShort: producerKey.nameShort },
                    { nameAbbreviation: producerKey.nameAbbreviation }
                ]
            }
        });
        return makerLookup;       
    }
}