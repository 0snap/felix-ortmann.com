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
