import { UserDto } from "../data/models/user.model";
import { prisma } from "../server";
import { Cyclist } from "@prisma/client";

export class UserService {
    public static async UpdateUser(user: UserDto): Promise<Cyclist | null> {
        const cyclist = prisma.cyclist.upsert({
            where: { providerId: user.providerId },
            update: user,
            create: user
        });

        return cyclist;
    }
}