import type { User } from "@/generated/prisma/client.ts";
import type { UserCreateInput } from "@/generated/prisma/models.ts";
import { prisma } from "@/lib/prisma.ts";
import { UserRepository } from "@/repositories/IUserRepository.ts";

export class PrismaUserRepository implements UserRepository {
  async create(data: UserCreateInput): Promise<User> {
    const user = await prisma.user.create({
      data,
    });
    return user;
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }
}
