import { Producer } from "../prisma/client";
import { MakeNullable } from "./mapper";

export type ProducerDto = MakeNullable<Producer, "id">;