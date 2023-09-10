import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://kylehadland.com.au",
  // base: "/kh-web-astro",
  // experimental: {
  //   assets: true,
  //   viewTransitions: true,
  // },
  integrations: [tailwind(), react(), sitemap()],
  vite: {
    plugins: []
  },
  build: {
    inlineStylesheets: "auto"
  }
});