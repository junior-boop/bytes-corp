// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node';
// import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output : 'server',
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind(), react()],

  adapter: node({
    mode: 'standalone',
  }),
});