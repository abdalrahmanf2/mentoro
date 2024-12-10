import { Box, CodeXml, Database, Laptop, Waypoints } from "lucide-react";
import ahmedImg from "@/assets/mentors/ahmed-mohammed.png";
import jayaImg from "@/assets/mentors/jaya-wills.png";
import johnImg from "@/assets/mentors/john-doe.png";

export const ROLES = [
  "Backend Developer",
  "Frontend Developer",
  "Figma Designer",
];

export const MENTORS = [
  {
    name: "Jaya Wills",
    role: "Backend Developer",
    skills: ["C#", "ASP.NET", "OOP", "Data Structures"],
    picture: jayaImg,
    location: "Alexandria, Egypt",
    about:
      'I joined Google in Aug 2020 and got "Exceed Expectation" in my first performance review. I got promoted to SWE3 in May 2022, although I had switched teams 6 months before and had to learn everything from scratch. I have taken 25+ interviews for Google and have mentored 10+ people to get into Google. I have also mentored 5+ Googlers on enhancing their career and promo packet (L3 -> L4). I joined Google in Aug 2020 and got "Exceed Expectation" in my first performance review. I got promoted to SWE3 in May 2022',
  },
  {
    name: "Ahmed Mohammed",
    role: "Frontend Developer",
    skills: ["C#", "ASP.NET", "OOP", "Data Structures"],
    picture: ahmedImg,
    location: "Alexandria, Egypt",
    about:
      'I joined Google in Aug 2020 and got "Exceed Expectation" in my first performance review. I got promoted to SWE3 in May 2022, although I had switched teams 6 months before and had to learn everything from scratch. I have taken 25+ interviews for Google and have mentored 10+ people to get into Google. I have also mentored 5+ Googlers on enhancing their career and promo packet (L3 -> L4). I joined Google in Aug 2020 and got "Exceed Expectation" in my first performance review. I got promoted to SWE3 in May 2022',
  },
  {
    name: "John Doe",
    role: "Figma Designer",
    skills: ["C#", "ASP.NET", "OOP", "Data Structures"],
    picture: johnImg,
    location: "Alexandria, Egypt",
    about:
      'I joined Google in Aug 2020 and got "Exceed Expectation" in my first performance review. I got promoted to SWE3 in May 2022, although I had switched teams 6 months before and had to learn everything from scratch. I have taken 25+ interviews for Google and have mentored 10+ people to get into Google. I have also mentored 5+ Googlers on enhancing their career and promo packet (L3 -> L4). I joined Google in Aug 2020 and got "Exceed Expectation" in my first performance review. I got promoted to SWE3 in May 2022',
  },
];

export const CATEGORIES = [
  {
    name: "All",
    Icon: Box,
  },
  {
    name: "Frontend",
    Icon: CodeXml,
  },
  {
    name: "Backend",
    Icon: Database,
  },
  {
    name: "Programming",
    Icon: Laptop,
  },
  {
    name: "Framework",
    Icon: Waypoints,
  },
];

export const COURSES = [
  {
    name: "C# Basics",
    category: "Backend",
    items: 10,
    description:
      "Backned development builds the server of a website, using C# & ASP .NET for highend performance on the server.",
    studentsNum: 12,
    content: [
      {
        name: "Loops.pdf",
        type: "file",
      },
      {
        name: "https://link.con",
        type: "link",
      },
    ],
  },
  {
    name: "React Basics",
    category: "Frontend",
    items: 10,
    description:
      "Frontend development builds the parts of websites users see and interact with, using React, HTML, CSS, and JavaScript for design and responsiveness.",
    studentsNum: 12,
    content: [
      {
        name: "Loops.pdf",
        type: "file",
      },
      {
        name: "https://link.con",
        type: "link",
      },
    ],
  },
];

export const MAX_FILE_SIZE = 24 * 1024 * 1024; // 24MB
export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
export const ACCEPTED_DOC_TYPES = ["application/pdf"];
export const ACCEPTED_VIDEO_TYPES = ["video/mp4"];
