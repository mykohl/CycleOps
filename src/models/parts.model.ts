import PrismaClient from "@prisma/client";

export type MakerUpsertModel = Omit<PrismaClient.Maker, "id">;
export type PartUpsertModel = Omit<PrismaClient.Part, "id"> & { makerUpsertModel?: MakerUpsertModel };
export type HubUpsertModel = Omit<PrismaClient.Hub, "id"> & { partUpsertModel: PartUpsertModel };
export type RimUpsertModel = Omit<PrismaClient.Rim, "id"> & { partUpsertModel: PartUpsertModel };