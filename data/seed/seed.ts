import { PrismaClient } from "../prisma/client";
import { 
  lookupPartClass,
  lookupPropertyGroup 
} from './seed.lookup';
import { 
  addPartClassMember, 
  addPropertyGroupMember,
  addPropertyTypeMember
} from './seed.add'
import { 
  PartClassDto,
  PropertyGroupDto
} from "../models/model.dto";
import {
  propertyTypeSeedModel,
  partTypeSeedModel
} from '../models/model.seed';
import * as partClassData from './seed.partClasses.json';
import * as propertyGroupData from './seed.propertyGroups.json';
import * as propertyTypeData from './seed.propertyTypes.json';
import * as partTypeData from './seed.partTypes.json';

async function main(prisma: PrismaClient) {
  try {
    await seedPartClass(prisma, partClassData.partClasses as PartClassDto[]);
    await seedPropertyGroup(prisma, propertyGroupData.propertyGroups as PropertyGroupDto[]);
    await seedPropertyType(prisma, propertyTypeData.propertyTypes as propertyTypeSeedModel[]);
    await seedPartType(prisma, partTypeData.partTypes as partTypeSeedModel[]);
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

async function seedPartClass(prisma: PrismaClient, data: PartClassDto[]) {
  await truncate(prisma, "PartClass");

  for (const partClass of data) {
    const record = await prisma.partClass.create({
      data: {
        order: partClass.order,
        name: partClass.name
      }
    });
  }
}

async function seedPropertyGroup(prisma: PrismaClient, data: PropertyGroupDto[]) {
  await truncate(prisma, "PropertyGroup");

  for (const propertyGroup of data) {
    const record = await prisma.propertyGroup.create({
      data: {
        order: propertyGroup.order,
        name: propertyGroup.name,
        description: propertyGroup.description
      }
    });
  }  
}

async function seedPropertyType(prisma: PrismaClient, data: propertyTypeSeedModel[]) {
  await truncate(prisma, "PropertyGroupMembership");
  await truncate(prisma, "PropertyType");

  for (const propertyType of data) {
    const record = await prisma.propertyType.create({
      data: {
        order: propertyType.order,
        name: propertyType.name,
        valueDataType: propertyType.valueDataType
      }
    });

    if(propertyType.propertyGroupPrimary) {
      const groupIdPrimary = await lookupPropertyGroup(prisma, propertyType.propertyGroupPrimary);
      if(groupIdPrimary) {
        await addPropertyGroupMember(prisma, record.id, groupIdPrimary, true);
      }
    }

    if(propertyType.propertyGroupsOther) {
      for (const group of propertyType.propertyGroupsOther) {
        const groupIdOther = await lookupPropertyGroup(prisma, group);
        if(groupIdOther) {
          await addPropertyGroupMember(prisma, record.id, groupIdOther, false);
        }
      }
    }
  }
}

async function seedPartType(prisma: PrismaClient, data: partTypeSeedModel[]) {
  await truncate(prisma, "PartType");

  for (const partType of data) {
    const record = await prisma.partType.create({
      data: {
        order: partType.order,
        name: partType.name
      }
    });

    if(partType.partClassPrimary) {
      const partClassPrimaryId = await lookupPartClass(prisma, partType.partClassPrimary);
      if(partClassPrimaryId) {
        await addPartClassMember(prisma, record.id, partClassPrimaryId, true);
      }
    }

    if(partType.partClassesOther) {
      for(const partClass of partType.partClassesOther) {
        const partClassOtherId = await lookupPartClass(prisma, partClass);
        if(partClassOtherId) {
          await addPartClassMember(prisma, record.id, partClassOtherId, false);
        }
      }
    }

    if(partType.propertyTypes) {
      for(const propertyType of partType.propertyTypes) {
        const propertyTypeLookup = await prisma.propertyType.findFirst({ where: { name: propertyType } });
        if(propertyTypeLookup) {
          await addPropertyTypeMember(prisma, record.id, propertyTypeLookup.id);
        }
      }
    }
  }
}

async function truncate(prisma: PrismaClient, table: string) {
  await prisma.$queryRawUnsafe(`TRUNCATE public."${table}" RESTART IDENTITY CASCADE;`);
}

main(new PrismaClient());