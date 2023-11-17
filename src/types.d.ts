import {IconName} from '@fortawesome/fontawesome-svg-core';

export type Paragraph = {
    title: string;
    text: string;
}

export type ProfileEntryData = {
    icon: IconName;
    color: string;
    text: string;
}


export type CvEntryData = {
    company: catworkx;
    icons: string[];
    link: string;
    jobTitle: string
    duration: string;
    description: string[];
}

export type BizTierData = {
    icon: IconName;
    catcher: string;
    header: string;
    text: string;
}

export type OpenerData = {
    lead: string;
    q: string;
    cta: string;
    cta2: string;
}
