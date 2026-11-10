import {load as parseYaml} from 'js-yaml';

const files = import.meta.glob<string>('../../content/*.yaml', {query: '?raw', import: 'default', eager: true});
const load = <T>(name: string): T => parseYaml(files[`../../content/${name}.yaml`]) as T;

export type Paragraph = {title: string; text: string};
export type AboutMeData = {
  intro: string[];
  key: string;
  outro: string[];
  highlights: {text: string; bullets: string[]};
};
export type CvEntryData = {
  company: string;
  icons: string[];
  link?: string;
  jobTitle: string;
  duration: string;
  description: string[];
};
export type ContactData = {
  name: string; street: string; postCode: number; city: string; country: string; phone: string; mail: string; ustid: string;
};
export type StackItem = {name: string; icon?: string};

export const hero = load<{eyebrow: string; headline: string; lead: string; availability: string; cta: string; clients: string[]}>('hero');
export const services = load<{services: {title: string; text: string}[]}>('services').services;
export const cases = load<{cases: {client: string; title: string; year: string; text: string; result: string}[]}>('cases').cases;
export const stack = load<{current: {name: string; items: StackItem[]}[]; also: string[]; earlier: string[]}>('stack');
export const aboutMe = load<AboutMeData>('about-me');
export const cv = load<{journey: CvEntryData[]}>('cv');
export const contact = load<ContactData>('contact');
export const imprint = load<{headline: string; contact_headline: string; paragraphs: Paragraph[]}>('imprint');
export const privacyPolicy = load<{headline: string; controller_headline: string; disclaimer: string[]; paragraphs: Paragraph[]}>('privacy-policy');
