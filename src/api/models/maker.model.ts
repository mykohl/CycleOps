import { Maker } from "../prisma/client";
import { NullableMap } from "../mapper";

export type MakerUpsertModel = NullableMap<Maker, "id">;