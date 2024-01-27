import { PrismaClient } from "../prisma/client";
import { ClassificationService } from '../../services/classification.service';
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
    const classificationService = new ClassificationService(prisma);
    await seedPartClass(classificationService, partClassData.partClasses as PartClassDto[]);
    await seedPropertyGroup(classificationService, propertyGroupData.propertyGroups as PropertyGroupDto[]);
    await seedPropertyType(classificationService, propertyTypeData.propertyTypes as propertyTypeSeedModel[]);
    await seedPartType(classificationService, partTypeData.partTypes as partTypeSeedModel[]);
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

async function seedPartClass(service: ClassificationService, data: PartClassDto[]) {
  await truncate(service.prisma, "PartClass");

  for (const partClass of data) {
    if(partClass.order && partClass.name) {
      await service.addPartClass(partClass.order, partClass.name);
    }
  }
}

async function seedPropertyGroup(service: ClassificationService, data: PropertyGroupDto[]) {
  await truncate(service.prisma, "PropertyGroup");

  for (const propertyGroup of data) {
    if(propertyGroup.order && propertyGroup.name) {
      service.addPropertyGroup(propertyGroup.order, propertyGroup.name, propertyGroup.description);
    }
  }  
}

async function seedPropertyType(service: ClassificationService, data: propertyTypeSeedModel[]) {
  await truncate(service.prisma, "PropertyGroupMembership");
  await truncate(service.prisma, "PropertyType");

  for (const propertyType of data) {
    if(propertyType.order && propertyType.name) {
      const record = await service.addPropertyType(propertyType.order, propertyType.name, propertyType.valueDataType)
    
      if(record && propertyType.propertyGroupPrimary) {
        const groupIdPrimary = await service.lookupPropertyGroup(propertyType.propertyGroupPrimary);
        if(groupIdPrimary) {
          await service.addPropertyGroupMember(record.id, groupIdPrimary.id, true);
        }
      }
  
      if(record && propertyType.propertyGroupsOther) {
        for (const group of propertyType.propertyGroupsOther) {
          const groupIdOther = await service.lookupPropertyGroup(group);
          if(groupIdOther) {
            await service.addPropertyGroupMember(record.id, groupIdOther.id, false);
          }
        }
      }   
    }
  }
}

async function seedPartType(service: ClassificationService, data: partTypeSeedModel[]) {
  await truncate(service.prisma, "PartType");

  for (const partType of data) {
    const record = await service.addPartType(partType.order, partType.name);

    if(record && partType.partClassPrimary) {
      const partClassPrimary = await service.lookupPartClass(partType.partClassPrimary);
      if(partClassPrimary) {
        await service.addPartClassMember(record.id, partClassPrimary.id, true);
      }
    }

    if(record && partType.partClassesOther) {
      for(const partClass of partType.partClassesOther) {
        const partClassOther = await service.lookupPartClass(partClass);
        if(partClassOther) {
          await service.addPartClassMember(record.id, partClassOther.id, false);
        }
      }
    }

    if(record && partType.propertyTypes) {
      for(const propertyType of partType.propertyTypes) {
        const propertyTypeLookup = await service.lookupPropertyType(propertyType);
        if(propertyTypeLookup) {
          await service.addPropertyTypeMember(record.id, propertyTypeLookup.id);
        }
      }
    }
  }
}

async function truncate(prisma: PrismaClient, table: string) {
  await prisma.$queryRawUnsafe(`TRUNCATE public."${table}" RESTART IDENTITY CASCADE;`);
}

main(new PrismaClient());