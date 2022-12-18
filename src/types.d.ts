import { IconName } from "@fortawesome/fontawesome-svg-core";

export interface Paragraph {
    title: string;
    text: string;
}

export interface ProfileEntryData {
    icon: IconName;
    color: string;
    text: string;
}


export interface CvEntryData {
    company: catworkx;
    icons: string[];
    link: string;
    jobTitle: string
    duration: string;
    description: string[];
}