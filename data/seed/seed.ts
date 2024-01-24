import { PrismaClient } from "../prisma/client";
import { ItemTypeDto, PropertyDefinitionDto } from "../models/item.model";
import * as itemTypeData from './seed.itemType.json';
const prisma = new PrismaClient();

async function main() {

    console.log(itemTypeData);

    const itemTypeDataArray = itemTypeData.ItemTypes as ItemTypeDto[];

    console.log(itemTypeDataArray);


    for (const item of itemTypeDataArray) {
      const itemTypeRecord = await prisma.itemType.create({
        data: {
          name: item.name,
        },
      });
  
      const itemTypeId = itemTypeRecord.id;
  
      const propertiesData: PropertyDefinitionDto[] = (item.properties || []).map(property => ({
        itemTypeId: itemTypeId,
        order: null,
        variation: null,
        name: property.name,
        group: property.group,
      }));
  
      await prisma.property.createMany({
        data: propertiesData,
      });
    }
  }
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })