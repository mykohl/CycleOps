import {
    PrismaClient,
    PartClass,
    PartClassMembership,
    PropertyGroup,
    PropertyGroupMembership,
    PropertyType,
    PropertyTypeMembership,
    PartType
} from "../data/prisma/client";
import { 
    PartClassDto, 
    PartTypeDto,
    PropertyGroupDto, 
    PropertyTypeDto 
} from "../data/models/model.dto";
import { sortNullSafe } from "./utility.service";
import { prisma } from '../prisma.instance';

export class ClassificationService {
    get prisma(): PrismaClient { return prisma; }

    public static getPartClassDto(partClass: PartClass): PartClassDto {
        const partClassDto: PartClassDto =  {
            id: partClass.id,
            order: partClass.order,
            name: partClass.name
        };
        return partClassDto;
    }

    public static getPartTypeDto(partType: PartType): PartTypeDto {
        const partTypeDto: PartTypeDto = {
            id: partType.id,
            order: partType.order,
            name: partType.name,
            description: partType.description
        };
        return partTypeDto;
    }

    public static async getPartClassifications(): Promise<PartClassDto[] | null> {
        return (await prisma.partClass.findMany())
            .map(c => this.getPartClassDto(c))
            .sort((a, b) => sortNullSafe(a.order, b.order));
    }

    public static async getPartTypes(): Promise<PartTypeDto[] | null> {
        return (await prisma.partType.findMany())
            .map(t => this.getPartTypeDto(t))
            .sort((a, b) => sortNullSafe(a.order, b.order));
    }

    public static async lookupPropertyGroup(key: string): Promise<PropertyGroup | null> {
        return await prisma.propertyGroup.findFirst( { where: { name: key } });
    }
    
    public static async lookupPartClass(key: string): Promise<PartClass | null> {
        return await prisma.partClass.findFirst( { where: { name: key } });
    }

    public static async lookupPropertyType(key: string): Promise<PropertyType | null> {
        return await prisma.propertyType.findFirst({ where: { name: key } });
    }

    public static async addPartClass(order: number, name: string): Promise<PartClass | null> {
        return await prisma.partClass.create({
            data: {
                order: order,
                name: name
            }
        });
    }

    public static async addPartType(order: number, name: string): Promise<PartType | null> {
        return await prisma.partType.create({
            data: {
                order: order,
                name: name
            }
        });
    }

    public static async addPartClassMember(typeId: number, classId: number, primary: boolean): Promise<PartClassMembership | null> {
        return await prisma.partClassMembership.create({
            data: {
                partTypeId: typeId,
                partClassId: classId,
                isPrimary: primary
            }
        });
    }
    
    public static async addPropertyGroup(order: number, name: string, description: string | null): Promise<PropertyGroup | null> {
        return await prisma.propertyGroup.create({
            data: {
                order: order,
                name: name,
                description: description
            }
        });
    }

    public static async addPropertyGroupMember(typeId: number, groupId: number, primary: boolean): Promise<PropertyGroupMembership | null> {
        return await prisma.propertyGroupMembership.create({
            data: {
                propertyTypeId: typeId,
                propertyGroupId: groupId,
                isPrimary: primary
            }
        });
    }

    public static async addPropertyType(order: number, name: string, valueDataType: string | null): Promise<PropertyType | null> {
        return await prisma.propertyType.create({
            data: {
                order: order,
                name: name,
                valueDataType: valueDataType
            }
        });
    }

    public static async addPropertyTypeMember(partTypeId: number, propertyTypeId: number): Promise<PropertyTypeMembership | null> {
        return await prisma.propertyTypeMembership.create({
            data: {
                partTypeId: partTypeId,
                propertyTypeId: propertyTypeId
            }
        });
    }
}