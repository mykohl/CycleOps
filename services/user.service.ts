import { UserDto } from "../data/models/model.dto";
import { prisma } from "../server";
import { User } from "../data/prisma/client";

export class UserService {
    public static async UpdateUser(user: UserDto): Promise<User | null> {
        const commonProperties = {
          provider: user.provider,
          providerId: user.providerId,
          lastLogIn: new Date(),
        };

        const cyclist = prisma.user.upsert({
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