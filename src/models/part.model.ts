import { Maker, Part, Hub } from "@prisma/client";

export type MakerUpsertModel = Omit<Maker, "id">;
export type PartUpsertModel = Omit<Part, "id"> & { makerName?: string };
export type HubUpsertModel = Omit<Hub, "id"> & { partUpsertModel: PartUpsertModel }