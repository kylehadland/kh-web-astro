import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import Sitemap from "vite-plugin-sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://kylehadland.com.au",
  // base: "/kh-web-astro",
  experimental: {
    assets: true,
    viewTransitions: true,
  },
  integrations: [tailwind(), react()],
  vite: {
    plugins: [Sitemap()],
  },
  build: {
    inlineStylesheets: "auto",
  },
})
