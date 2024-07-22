import { defineConfig } from 'astro/config';
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [basicSsl()],
    server: {
      // https://www.storyblok.com/faq/setting-up-https-on-localhost-in-astro
      https: true,
    },
  },
});
