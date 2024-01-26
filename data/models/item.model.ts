import { Producer, Item, ItemType, Property, PropertyGroup } from "../prisma/client";
import { ProducerDto } from "./producer.model";
import { MakeNullable } from "./mapper";

export type ItemDto = MakeNullable<Item, "id" | "brandLabelId"> & { producer: ProducerDto }
export type PropertyDto = MakeNullable<Property, "id">
export type PropertyGroupDto = MakeNullable<PropertyGroup, "id"> & { properties?: PropertyDto[] }
export type ItemTypeDto = MakeNullable<ItemType, "id"> & { propertyGroups?: PropertyGroupDto[] }
