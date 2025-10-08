// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import preact from '@astrojs/preact';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), preact()],
  adapter: vercel()
});