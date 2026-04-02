import { fastify } from "fastify";
import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";

export const app = fastify();

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(StatusCodes.BAD_REQUEST).send({
      success: false,
      message: error.message,
    });
  }

  return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
    success: false,
    message: "INTERNAL SERVER ERROR",
  });
});
