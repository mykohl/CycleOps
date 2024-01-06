import PrismaClient from "../prisma/client";
import { MakerUpsertModel } from "./maker.model";

export type PartUpsertModel = Omit<PrismaClient.Part, "id"> & { makerUpsertModel?: MakerUpsertModel };
export type HubUpsertModel = Omit<PrismaClient.Hub, "id"> & { partUpsertModel: PartUpsertModel };
export type RimUpsertModel = Omit<PrismaClient.Rim, "id"> & { partUpsertModel: PartUpsertModel };