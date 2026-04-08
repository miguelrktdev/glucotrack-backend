import { UserAlreadyExistsError } from "@/errors/user-already-exists.error.ts";
import { registerUserFactory } from "@/factories/register-user.factory.ts";
import { USER_SCHEMAS } from "@/schemas/user.schemas.ts";
import type { FastifyReply, FastifyRequest } from "fastify";
import { StatusCodes } from "http-status-codes";

const REGISTER = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const { success, data, error } = USER_SCHEMAS.REGISTER.safeParse(request.body);
        if (!success) {
            const issue = error.issues[0];
            return reply.status(StatusCodes.BAD_REQUEST).send({
                success: false,
                message: issue.message,
            });
        }
        const { name, email, password } = data;
        const { registerUserService } = registerUserFactory();
        const payload = {
            name,
            email,
            password,
        };
        await registerUserService.handle(payload);
        return reply.status(StatusCodes.CREATED).send({
            success: true,
            message: "User registered successfully",
        });
    } catch (error) {
        if (error instanceof UserAlreadyExistsError) {
            return reply.status(StatusCodes.CONFLICT).send({
                success: false,
                message: error.message,
            });
        }
        return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: false,
            message: "An error occurred while registering the user",
        });
    }
};

export const USER_CONTROLLER = {
    REGISTER,
};
