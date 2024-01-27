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
import { prisma } from '../prisma.instance';

export class ClassificationService {
    get prisma(): PrismaClient { return prisma; }

    public static async lookupPropertyGroup(key: string): Promise<PropertyGroup | null> {
        const propertyGroupLookup = await prisma.propertyGroup.findFirst( { where: { name: key } });
        if(propertyGroupLookup) return propertyGroupLookup;
        return null;
    }
    
    public static async lookupPartClass(key: string): Promise<PartClass | null> {
        const partClassLookup = await prisma.partClass.findFirst( { where: { name: key } });
        if(partClassLookup) return partClassLookup;
        return null;
    }

    public static async lookupPropertyType(key: string): Promise<PropertyType | null> {
        const partTypeLookup = await prisma.propertyType.findFirst({ where: { name: key } });
        if(partTypeLookup) return partTypeLookup;
        return null;
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