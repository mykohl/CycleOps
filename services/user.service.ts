import { UserDto } from "../data/models/model.dto";
import { prisma } from "../prisma.instance";
import { User } from "../data/prisma/client";
import { sortString, sortPeople } from "./utility.service";

export class UserService {

  public static async getUsers(limit?: number | null): Promise<UserDto[] | null> {
    const userResult = (await prisma.user.findMany())
      .sort((a, b) => sortPeople(a, b)
    );
    return userResult;
  }

  public static async updateUser(user: UserDto): Promise<User | null> {
      const commonProperties = {
        provider: user.provider,
        providerId: user.providerId,
        lastLogIn: new Date(),
      };

      const userRecord = prisma.user.upsert({
        where: { providerId: user.providerId },
        update: { 
          ...commonProperties, 
          ...user, 
          lastLogIn: new Date(),
          role: user.role
        },
        create: {
          ...commonProperties,
          ...user,
          registered: new Date(),
          role: "standard"
        },
      });
    
      return userRecord;
    }    
}