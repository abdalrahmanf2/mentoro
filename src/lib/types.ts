import { StaticImageData } from "next/image";

export interface Mentor {
  name: string;
  role: string;
  skills: string[];
  picture: StaticImageData;
  location: string;
  about: string;
}

export interface Link {
  description: string;
  link: string;
}

export interface Course {
  name: string;
  category: string;
  items: number;
  description: string;
  studentsNum: number;
  content?: Content[];
}

export interface Content {
  name: string;
  type: string;
}
