import { Cyclist } from "../prisma/client";
import { MakeNullable } from "./mapper";

export type UserDto = MakeNullable<Cyclist, 'id'>