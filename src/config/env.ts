import "dotenv/config";
import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("production"),
  PORT: z.coerce.number().default(3333),
  HOST: z.string(),
  DATABASE_URL: z.string(),
});

const _env = schema.safeParse(process.env);

if (!_env.success) {
  console.error("Invalid Environment Variables");
  throw new Error("Invalid Environment Variables");
}

export const env = _env.data;
