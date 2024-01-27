import { PrismaClient } from "../prisma/client";

export async function addPartClassMember(prisma: PrismaClient, typeId: number, classId: number, primary: boolean) {
    await prisma.partClassMembership.create({
      data: {
        partTypeId: typeId,
        partClassId: classId,
        isPrimary: primary
      }
    });
  }
  
  export async function addPropertyGroup(prisma: PrismaClient, order: number, name: string, description: string) {

  }

  export async function addPropertyGroupMember(prisma: PrismaClient, typeId: number, groupId: number, primary: boolean) {
    await prisma.propertyGroupMembership.create({
      data: {
        propertyTypeId: typeId,
        propertyGroupId: groupId,
        isPrimary: primary
      }
    });
  }

  export async function addPropertyTypeMember(prisma: PrismaClient, partTypeId: number, propertyTypeId: number) {
    await prisma.propertyTypeMembership.create({
        data: {
          partTypeId: partTypeId,
          propertyTypeId: propertyTypeId
        }
      });
  }