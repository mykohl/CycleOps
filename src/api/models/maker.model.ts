import { Maker } from "../prisma/client";

export type MakerUpsertModel = Omit<Maker, "id">;