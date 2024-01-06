import PrismaClient from "@prisma/client";

export type MakerUpsertModel = Omit<PrismaClient.Maker, "id">;