import { USER_CONTROLLER } from "@/controllers/user.controller.ts";
import type { FastifyInstance } from "fastify";

export const userRoutes = async (app: FastifyInstance) => {
    app.post("/register", USER_CONTROLLER.REGISTER);
};
