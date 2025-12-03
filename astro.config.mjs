// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://new-leaf-academy.co.uk",
  trailingSlash: 'always',
  redirects: {
    '/beyond-the-classroom': '/blog', // e.g. '/resources'
    '/beyond-the-classroom/': '/blog', // Cover both versions just in case
  },

  integrations: [
    sitemap(),
  ],
  adapter: cloudflare({
    mode: 'directory', // ✅ Ensures static assets are handled as a directory deploy
    // If you need SSR for specific pages, you'd use 'advanced' and specific configs.
    // For a static site, 'directory' or no adapter at all (and deploying to Cloudflare Pages) is common.
    platformProxy: {
      enabled: true,
    },
  }),
  // You do NOT need the `image` block here for built-in astro:assets if you're producing a static site.
  // Astro will automatically compile images during `npm run build` for static output.
});