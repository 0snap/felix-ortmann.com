# My personal webpage

This is a personal project for my webpage [felix-ortmann.com](https://felix-ortmann.com). It's a very minimal setup and focuses on easy implementation and hosting.

The site is built with [Astro](https://astro.build/) and [Bulma CSS](https://bulma.io/). Content lives in `content/*.yaml`, icons come from [Iconify](https://icon-sets.iconify.design/) via `src/lib/icons.ts`.

- `nvm use && npm install`
- `npm run dev` - local dev server
- `npm run build` - static build to `dist/`
- `npm run deploy` - build and push `dist/` to GitHub Pages
