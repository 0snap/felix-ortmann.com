// Accessibility check (WCAG 2.1 A/AA via axe) for every built page, in light and dark mode.
// usage: node scripts/a11y.mjs [baseUrl]   (expects the built site to be served, e.g. `npm run preview`)
import {readdirSync} from 'node:fs';
import {join, relative} from 'node:path';
import {chromium} from 'playwright';
import {AxeBuilder} from '@axe-core/playwright';

const base = process.argv[2] ?? 'http://localhost:4321';
const dist = new URL('../dist', import.meta.url).pathname;

const pages = readdirSync(dist, {recursive: true})
  .filter((f) => f.endsWith('.html'))
  .map((f) => '/' + relative(dist, join(dist, f)).replace(/index\.html$/, ''));

const browser = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || undefined});
let failures = 0;
for (const colorScheme of ['light', 'dark']) {
  const context = await browser.newContext({colorScheme});
  const page = await context.newPage();
  for (const path of pages) {
    await page.goto(base + path, {waitUntil: 'networkidle'});
    // open all collapsed journey entries so their content is checked too
    await page.$$eval('details', (els) => els.forEach((el) => (el.open = true)));
    const {violations} = await new AxeBuilder({page}).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
    for (const v of violations) {
      failures++;
      console.log(`✖ [${colorScheme}] ${path} ${v.id}: ${v.help}`);
      v.nodes.slice(0, 3).forEach((n) => console.log(`    ${n.target.join(' ')}`));
    }
    if (!violations.length) console.log(`✔ [${colorScheme}] ${path}`);
  }
  await context.close();
}
await browser.close();
process.exit(failures ? 1 : 0);
