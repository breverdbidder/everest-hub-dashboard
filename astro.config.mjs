import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://breverdbidder.github.io',
  base: '/everest-hub-dashboard',
  output: 'static',
  integrations: [tailwind()],
  build: { format: 'file' }
});
