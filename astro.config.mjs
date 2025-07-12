// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  legacy: {
    // Mantém compatibilidade com frontmatter `layout:` nos Markdown
    collections: true,
  },
});
