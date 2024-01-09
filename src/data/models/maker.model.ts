import { Maker } from "../prisma/client";
import { MakeNullable } from "./mapper";

export type MakerDto = MakeNullable<Maker, "id">;