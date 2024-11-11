import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

import vercel from "@astrojs/vercel/static";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), db()],
  output: "static",
  adapter: vercel(),
});