import { Maker } from "../prisma/client";
import { NullableMap } from "../../api/mapper";

export type MakerUpsertModel = NullableMap<Maker, "id">;