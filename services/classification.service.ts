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

export class ClassificationService {

    constructor(private _prisma: PrismaClient) {
    }

    get prisma(): PrismaClient { return this._prisma; }

    async lookupPropertyGroup(key: string): Promise<PropertyGroup | null> {
        const propertyGroupLookup = await this._prisma.propertyGroup.findFirst( { where: { name: key } });
        if(propertyGroupLookup) return propertyGroupLookup;
        return null;
    }
    
    async lookupPartClass(key: string): Promise<PartClass | null> {
        const partClassLookup = await this._prisma.partClass.findFirst( { where: { name: key } });
        if(partClassLookup) return partClassLookup;
        return null;
    }

    async lookupPropertyType(key: string): Promise<PropertyType | null> {
        const partTypeLookup = await this._prisma.propertyType.findFirst({ where: { name: key } });
        if(partTypeLookup) return partTypeLookup;
        return null;
    }

    async addPartClass(order: number, name: string): Promise<PartClass | null> {
        return await this._prisma.partClass.create({
            data: {
              order: order,
              name: name
            }
        });
    }

    async addPartType(order: number, name: string): Promise<PartType | null> {
        return await this._prisma.partType.create({
            data: {
              order: order,
              name: name
            }
        });
    }

    async addPartClassMember(typeId: number, classId: number, primary: boolean): Promise<PartClassMembership | null> {
        return await this._prisma.partClassMembership.create({
            data: {
                partTypeId: typeId,
                partClassId: classId,
                isPrimary: primary
            }
        });
    }
    
    async addPropertyGroup(order: number, name: string, description: string | null): Promise<PropertyGroup | null> {
        return await this._prisma.propertyGroup.create({
            data: {
              order: order,
              name: name,
              description: description
            }
        });
    }

    async addPropertyGroupMember(typeId: number, groupId: number, primary: boolean): Promise<PropertyGroupMembership | null> {
        return await this._prisma.propertyGroupMembership.create({
            data: {
                propertyTypeId: typeId,
                propertyGroupId: groupId,
                isPrimary: primary
            }
        });
    }

    async addPropertyType(order: number, name: string, valueDataType: string | null): Promise<PropertyType | null> {
        return await this._prisma.propertyType.create({
            data: {
              order: order,
              name: name,
              valueDataType: valueDataType
            }
        });
    }

    async addPropertyTypeMember(partTypeId: number, propertyTypeId: number): Promise<PropertyTypeMembership | null> {
        return await this._prisma.propertyTypeMembership.create({
            data: {
            partTypeId: partTypeId,
            propertyTypeId: propertyTypeId
            }
        });
    }
}