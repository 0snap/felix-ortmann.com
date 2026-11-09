// llms.txt (https://llmstxt.org): plain-markdown summary of the site for LLMs, built from the same content as the page.
import {cases, cv, hero, services, stack} from '../lib/content';
import {site} from '../lib/site';

const plain = (html: string) => html.replace(/<[^>]+>/g, '').replace(/&mdash;/g, '–').replace(/\s+/g, ' ').trim();

export const GET = () => {
  const text = [
    '# Felix Ortmann',
    '',
    `> ${hero.headline} ${hero.lead}`,
    '',
    `${hero.eyebrow}. ${hero.availability}.`,
    '',
    '## Services',
    ...services.map((s) => `- **${s.title}**: ${s.text}`),
    '',
    '## Selected work',
    ...cases.map((c) => `- **${c.client} – ${c.title}** (${c.year}): ${c.text} Result: ${c.result}`),
    '',
    '## Current stack',
    ...stack.current.map((g) => `- ${g.name}: ${g.items.map((i) => i.name).join(', ')}`),
    `- Also: ${stack.also.join(', ')}`,
    `- Earlier (not in active use): ${stack.earlier.join(', ')}`,
    '',
    '## Journey',
    ...cv.journey.map((e) => `- ${plain(e.duration)}: ${e.company} – ${e.jobTitle}`),
    '',
    '## Contact',
    `- [Website contact section](${site.url}/#contact)`,
    `- [LinkedIn](${site.linkedin})`,
    `- [Malt](${site.malt})`,
    `- [freelancermap](${site.freelancermap})`,
    '',
  ].join('\n');
  return new Response(text, {headers: {'Content-Type': 'text/plain; charset=utf-8'}});
};
