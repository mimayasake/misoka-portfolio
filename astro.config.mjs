// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { processAnnotations } from 'astro/runtime/client/dev-toolbar/apps/audit/annotations.js';

// https://astro.build/config
export default defineConfig({
  site: 'https://mimayasake.github.io',
  base: process.env.CF_PAGES === '1' ? '/' : '/misoka-portfolio/',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});