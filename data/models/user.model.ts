import { Cyclist } from "../prisma/client";
import { MakeNullable, MakeOptional } from "./mapper";

export type UserDto = MakeOptional<Cyclist, 'id' | 'lastLogIn' | 'registered' | 'roles'>;
export type UserStatus = {
    actionTitle: string,
    actionColor: string,
    actionIcon: string
};