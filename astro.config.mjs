// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'always', // Always inline stylesheets to prevent render blocking
    assets: 'assets' // Use a different directory name for assets
  },
  vite: {
    build: {
      assetsInlineLimit: 10240 // Inline assets smaller than 10KB
    }
  }
});
