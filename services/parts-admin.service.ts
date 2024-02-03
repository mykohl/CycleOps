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
    PartClassMembershipDto, 
    PartTypeDto,
    PropertyGroupDto, 
    PropertyTypeDto 
} from "../data/models/model.dto";
import { sortNullSafe } from "./utility.service";
import { prisma } from '../prisma.instance';

export class PartsAdminService {
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

    public static getPartClassMembershipDto(partClassMembership: PartClassMembership): PartClassMembershipDto | null {
        const partClassMembershipDto: PartClassMembershipDto = {
            id: partClassMembership.id,
            partTypeId: partClassMembership.partTypeId,
            partClassId: partClassMembership.partClassId,
            isPrimary: partClassMembership.isPrimary
        };
        return partClassMembershipDto;
    }

    public static async getPartClasses(): Promise<PartClassDto[] | null> {
        return (await prisma.partClass.findMany())
            .map(c => this.getPartClassDto(c))
            .sort((a, b) => sortNullSafe(a.order, b.order));
    }

    public static async getPartTypes(): Promise<PartTypeDto[] | null> {
        const partTypes = await prisma.partType.findMany({
            include: {
                partClasses: true
            }
        });

        return partTypes.map(t => ({
            ...this.getPartTypeDto(t),
            partClassRefs: t.partClasses.map(c => c.partClassId)
        }))
        .sort((a, b) => sortNullSafe(a.order, b.order));
    }

    public static async lookupPropertyGroup(key: string): Promise<PropertyGroup | null> {
        return await prisma.propertyGroup.findFirst( { where: { name: key } });
    }
    
    public static async lookupPartClass(key: string): Promise<PartClass | null> {
        return await prisma.partClass.findFirst( { where: { name: key } });
    }

    public static async lookupPartClassMembership(partClassMembershipDto: PartClassMembershipDto) {
        return await prisma.partClassMembership.findFirst({
            where: {
                partTypeId: partClassMembershipDto.partTypeId,
                partClassId: partClassMembershipDto.partClassId
            }
        })
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

    public static async addPartClassMember(partClassMembershipDto: PartClassMembershipDto): Promise<PartClassMembershipDto | null> {
        const result = await prisma.partClassMembership.create({
            data: {
                partTypeId: partClassMembershipDto.partTypeId,
                partClassId: partClassMembershipDto.partClassId,
                isPrimary: partClassMembershipDto.isPrimary
            }
        });
        return this.getPartClassMembershipDto(result);
    }

    public static async removePartClassMember(partClassMembershipDto: PartClassMembershipDto): Promise<boolean> {
        console.log(partClassMembershipDto);
        
        if(!partClassMembershipDto || !partClassMembershipDto.partTypeId || !partClassMembershipDto.partClassId) return false;
        if(!partClassMembershipDto.id) {
            const lookup = await this.lookupPartClassMembership(partClassMembershipDto);
            if(!lookup) return false;
            partClassMembershipDto.id = lookup.id;
        }

        const result = await prisma.partClassMembership.delete({
            where: { 
                id: partClassMembershipDto.id
            }
        });
        if(result) return true;
        return false;
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