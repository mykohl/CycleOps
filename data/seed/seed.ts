import { PrismaClient } from "../prisma/client";
import { 
  PartClassDto,
  PartTypeDto, 
  PropertyDto, 
  PropertyTypeDto,
  PropertyGroupDto
} from "../models/model.dto";
import * as partClassData from './seed.partClasses.json';
import * as propertyGroupData from './seed.propertyGroups.json';
import * as propertyTypeData from './seed.propertyTypes.json';

const prisma = new PrismaClient();

type propertyTypeSeedModel = {
  order: number;
  name: string;
  valueDataType: string;
  valueDataHint: string;
  valueDataTypeModifier: string | null;
  propertyGroups: string[];
};

async function main() {
  await seedPartClass(partClassData.partClasses as PartClassDto[]);
  await seedPropertyGroup(propertyGroupData.propertyGroups as PropertyGroupDto[]);
  await seedPropertyType(propertyTypeData.propertyTypes as propertyTypeSeedModel[]);
}

async function truncate(table: string) {
  await prisma.$queryRawUnsafe(`TRUNCATE public."${table}" RESTART IDENTITY CASCADE;`);
}

async function seedPartClass(data: PartClassDto[]) {
  await truncate("PartClass");

  for (const partClass of data) {
    const record = await prisma.partClass.create({
      data: {
        order: partClass.order,
        name: partClass.name
      }
    });
  }
}

async function seedPartType(data: PartTypeDto[]) {

}

async function seedPropertyGroup(data: PropertyGroupDto[]) {
  await truncate("PropertyGroup");

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

async function seedPropertyType(data: propertyTypeSeedModel[]) {
  await truncate("PropertyGroupMembership");
  await truncate("PropertyType");

  for (const propertyType of data) {
    const record = await prisma.propertyType.create({
      data: {
        order: propertyType.order,
        name: propertyType.name,
        valueDataType: propertyType.valueDataType
      }
    });

    if(propertyType.propertyGroups){
      for (const group of propertyType.propertyGroups) {
        const groupLookup = await prisma.propertyGroup.findUnique({ where: { name: group } });
        if(groupLookup) {
          const groupMember = await prisma.propertyGroupMembership.create({
            data: {
              propertyTypeId: record.id,
              groupId: groupLookup.id
            }
          });
        }
      }
    }
  }
}

/*
  const propertyDefinitionData: PropertyDto[] = (item.properties || []).map(property => ({
    itemTypeId: itemTypeRecord.id,
    order: null,
    variation: null,
    name: property.name,
    group: property.group,
  }));

  await prisma.propertyDefinition.createMany({
    data: propertyDefinitionData,
  });
  */
main().then(async () => {
  await prisma.$disconnect()
}).catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})