import { UserAlreadyExistsError } from "@/errors/user-already-exists.error.ts";
import type { User } from "@/generated/prisma/client.ts";
import type { PrismaUserRepository } from "@/repositories/user.repository.ts";
import { genSalt, hash } from "bcryptjs";

interface UserRegisterServiceRequest {
  name: string;
  email: string;
  password: string;
}

type UserRegisterServiceResponse = User;

export class UserRegisterService {
  constructor(private readonly userRepository: PrismaUserRepository) {}

  async handle({ name, email, password }: UserRegisterServiceRequest): Promise<UserRegisterServiceResponse> {
    const doesUserExists = await this.userRepository.findByEmail(email);

    if (doesUserExists) {
      throw new UserAlreadyExistsError();
    }

    const salt = await genSalt(6);
    const password_hash = await hash(password, salt);

    const payload = {
      name,
      email,
      password_hash,
    };
    const user = await this.userRepository.create(payload);
    return user;
  }
}
