import { Part, Hub, Rim } from "../prisma/client";
import { NullableMap } from "../mapper";

type nullableKeysPart = "id" | "makerId"
type nullableKeysSubpart = "id" | "partId"

export type PartUpsertModel = NullableMap<Part, nullableKeysPart> & { makerName?: string };
export type HubUpsertModel = NullableMap<Hub, nullableKeysSubpart> & Omit<PartUpsertModel, "id">
export type RimUpsertModel = NullableMap<Rim, nullableKeysSubpart> & Omit<PartUpsertModel, "id">


export interface testPart extends NullableMap<Part, nullableKeysPart> {
    makerName?: string;
}