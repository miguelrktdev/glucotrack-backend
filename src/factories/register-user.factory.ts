import { PrismaUserRepository } from "@/repositories/user.repository.ts";
import { UserRegisterService } from "@/services/user-register.service.ts";

export const registerUserFactory = () => {
    const userRepository = new PrismaUserRepository();
    const registerUserService = new UserRegisterService(userRepository);
    return {
        registerUserService,
    };
};
