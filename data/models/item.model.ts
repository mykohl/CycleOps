import { Producer, Item, ItemType, PropertyDefinition } from "../prisma/client";
import { ProducerDto } from "./producer.model";
import { MakeNullable } from "./mapper";

export type ItemDto = MakeNullable<Item, "id" | "brandLabelId"> & { maker: ProducerDto }
export type PropertyDefinitionDto = MakeNullable<PropertyDefinition, "id">
export type ItemTypeDto = MakeNullable<ItemType, "id"> & { properties?: PropertyDefinitionDto[] }
