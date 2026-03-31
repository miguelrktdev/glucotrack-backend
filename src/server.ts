import { app } from "@/app.ts";
import { env } from "@/config/env.ts";

app
  .listen({
    port: env.PORT,
    host: env.HOST,
  })
  .then(() => {
    console.log("HTTP Server Running 🚀");
  });
