import {defineConfig} from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://felix-ortmann.com',
  integrations: [icon()],
  vite: {
    optimizeDeps: {
      entries: ['src/**/*.astro'],
    },
    css: {
      preprocessorOptions: {
        sass: {
          // bulma 0.9 uses legacy sass features
          quietDeps: true,
          silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'slash-div', 'if-function'],
        },
      },
    },
  },
});
