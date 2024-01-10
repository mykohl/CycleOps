import { Part, Hub, Rim } from "../prisma/client";
import { MakerDto } from "./maker.model";
import { MakeNullable } from "./mapper";

type nullableKeysPart = "id" | "makerId"
type nullableKeysSubpart = "id" | "partId"

export type PartDto = MakeNullable<Part, nullableKeysPart> & { maker: MakerDto }
export type HubDto = MakeNullable<Hub, nullableKeysSubpart> & Omit<PartDto, "id">;
export type RimDto = MakeNullable<Rim, nullableKeysSubpart> & Omit<PartDto, "id">;
