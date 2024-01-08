import { Part, Hub, Rim } from "../prisma/client";
import { MakerUpsertModel } from "./maker.model";

export type PartUpsertModel = Omit<Part, "id"> & { makerUpsertModel?: MakerUpsertModel };
export type HubUpsertModel = Omit<Hub, "id"> & { partUpsertModel: PartUpsertModel };
export type RimUpsertModel = Omit<Rim, "id"> & { partUpsertModel: PartUpsertModel };