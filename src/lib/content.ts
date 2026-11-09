import {load as parseYaml} from 'js-yaml';

const files = import.meta.glob<string>('../../content/*.yaml', {query: '?raw', import: 'default', eager: true});
const load = <T>(name: string): T => parseYaml(files[`../../content/${name}.yaml`]) as T;

export type Paragraph = {title: string; text: string};
export type AboutMeParagraphData = {icon: string; color: string; text: string};
export type AboutMeData = {
  paragraphs: AboutMeParagraphData[];
  highlights: {text: string; bullets: string[]};
};
export type CvEntryData = {
  company: string;
  icons: string[];
  link: string;
  jobTitle: string;
  duration: string;
  description: string[];
};
export type BizTierData = {icon: string; catcher: string; header: string; text: string};
export type OpenerData = {lead: string; q: string; cta: string};
export type ContactData = {
  name: string; street: string; postCode: number; city: string; country: string; phone: string; mail: string; ustid: string;
};

export const aboutMe = load<AboutMeData>('about-me');
export const cv = load<{journey: CvEntryData[]}>('cv');
export const biz = load<{bizHeadline: string; tiers: BizTierData[]}>('biz');
export const opener = load<{opener: OpenerData}>('opener');
export const contact = load<ContactData>('contact');
export const imprint = load<{headline: string; contact_headline: string; paragraphs: Paragraph[]}>('imprint');
export const privacyPolicy = load<{headline: string; disclaimer: string[]; paragraphs: Paragraph[]}>('privacy-policy');
