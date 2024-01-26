import { PrismaClient } from "../prisma/client";
import { ItemTypeDto, PropertyDto } from "../models/item.model";
import * as itemTypeData from './seed.json';

const prisma = new PrismaClient();

async function main() {
  await seedItemTypes();
}

async function truncate(tables: string[]) {
  for(const table of tables) {
    await prisma.$queryRawUnsafe(`TRUNCATE public."${table}" RESTART IDENTITY CASCADE;`);
  }
}

async function seedItemTypes() {
  await truncate(["PropertyDefinition", "ItemType"]);

  for (const item of itemTypeData.ItemTypes as ItemTypeDto[]) {
    const itemTypeRecord = await prisma.itemType.create({
      data: {
        name: item.name,
      },
    });

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
  }
}

main().then(async () => {
  await prisma.$disconnect()
}).catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})