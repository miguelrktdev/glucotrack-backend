import type { User } from "@/generated/prisma/client.ts";
import type { UserCreateInput } from "@/generated/prisma/models.ts";

export interface UserRepository {
  create(data: UserCreateInput): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
