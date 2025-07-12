// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  legacy: {
    // Mantém compatibilidade com frontmatter `layout:` nos Markdown
    collections: true,
  },
});
