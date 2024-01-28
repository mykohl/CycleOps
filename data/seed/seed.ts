import { prisma } from "../../prisma.instance";
import { 
  PartClassDto,
  PropertyGroupDto
} from "../models/model.dto";
import {
  propertyTypeSeedModel,
  partTypeSeedModel
} from '../models/model.seed';
import {
  seedPartClass,
  seedPartType,
  seedPropertyGroup,
  seedPropertyType
} from './seed.classifications';
import * as partClassData from './seed.partClasses.json';
import * as propertyGroupData from './seed.propertyGroups.json';
import * as propertyTypeData from './seed.propertyTypes.json';
import * as partTypeData from './seed.partTypes.json';

async function main() {
  try {
    await truncate([
      "PartClass",
      "PartClassMembership",
      "PropertyGroup",
      "PropertyGroupMembership",
      "PropertyType",
      "PropertyTypeMembership",
      "PartType"
  ]);
    await seedPartClass(partClassData.partClasses as PartClassDto[]);
    await seedPropertyGroup(propertyGroupData.propertyGroups as PropertyGroupDto[]);
    await seedPropertyType(propertyTypeData.propertyTypes as propertyTypeSeedModel[]);
    await seedPartType(partTypeData.partTypes as partTypeSeedModel[]);
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

async function truncate(tables: string[]) {
  for(const table of tables) {
    await prisma.$queryRawUnsafe(`TRUNCATE public."${table}" RESTART IDENTITY CASCADE;`);
  }
}

main();