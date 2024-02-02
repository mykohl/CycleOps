import { UserDto } from "../data/models/model.dto";
import { prisma } from "../prisma.instance";
import { User } from "../data/prisma/client";
import { sortNullSafe, sortPeople } from "./utility.service";

export class UserService {

  public static async getUsers(limit?: number | null): Promise<UserDto[] | null> {
    const userResult = (await prisma.user.findMany())
      .sort((a, b) => sortPeople(a, b)
    );
    return userResult;
  }

  public static async findUserById(userId: number): Promise<User | null> {
    return await prisma.user.findUnique({ where: { id: userId } });
  }

  public static async findUserByProviderId(providerId: string): Promise<User | null> {
    return await prisma.user.findUnique({ where: { providerId: providerId } });
  }

  public static async updateUser(user: UserDto): Promise<User | null> {
    if(!user.providerId) {
      const userRecord = await prisma.user.create({
        data: {
          name: user.name,
          nameFirst: user.nameFirst,
          nameLast: user.nameLast,
          providerId: user.providerId,
          provider: user.provider,
          email: user.email,
          role: "standard"
        }
      });
      return userRecord;
    }

    const confirmUserRecord = await this.findUserByProviderId(user.providerId);
    if(confirmUserRecord) {
      const userRecord = await prisma.user.update({
        where: { providerId: user.providerId },
        data: {
          name: user.name,
          nameFirst: user.nameFirst,
          nameLast: user.nameLast,
          providerId: user.providerId,
          provider: user.provider,
          email: user.email,
          role: user.role
        }
      });
      return userRecord;
    }
    return null;
  }    
}