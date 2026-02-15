import process from "node:process";

import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    API_URL: z.url(),
  },
  runtimeEnv: process.env,
});
