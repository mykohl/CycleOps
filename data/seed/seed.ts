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
import { prisma } from "../../prisma.instance";

async function main() {
  try {
    await truncate("PartClass");
    await truncate("PropertyGroup");
    await truncate("PropertyGroupMembership");
    await truncate("PropertyType");
    await truncate("PartType");
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

async function truncate(table: string) {
  await prisma.$queryRawUnsafe(`TRUNCATE public."${table}" RESTART IDENTITY CASCADE;`);
}

main();