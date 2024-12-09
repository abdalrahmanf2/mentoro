import { StaticImageData } from "next/image";

export interface Mentor {
    name: string;
    role: string;
    skills: string[];
    picture: StaticImageData;
    location: string;
}

export interface Link {
    description: string;
    link: string;
}
