import type { FastifyInstance } from "fastify";

export const routes = async (app: FastifyInstance) => {
  app.get("/hello", async (_request, reply) => {
    return reply.status(200).send({
      success: true,
      message: "World!!!",
    });
  });
};
