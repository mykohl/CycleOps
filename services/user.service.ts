import { UserDto } from "../data/models/user.model";
import { prisma } from "../server";
import { Cyclist } from "@prisma/client";

export class UserService {
    public static async UpdateUser(user: UserDto): Promise<Cyclist | null> {
        const commonProperties = {
          provider: user.provider,
          providerId: user.providerId,
          lastLogIn: new Date(),
        };

        const cyclist = prisma.cyclist.upsert({
          where: { providerId: user.providerId },
          update: { 
            ...commonProperties, 
            ...user, 
            lastLogIn: new Date(),
            roles: user.roles 
          },
          create: {
            ...commonProperties,
            ...user,
            registered: new Date(),
            roles: "standard"
          },
        });
      
        return cyclist;
      }    
}