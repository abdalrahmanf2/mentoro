import { Box, CodeXml, Database, Laptop, Waypoints } from "lucide-react";

export const MENTORS = [
    {
        name: "Jaya Wills",
        role: "Backend Developer",
        skills: ["C#", "ASP.NET", "OOP", "Data Structures"],
        picture: "/assets/mentors/jaya-wills.png",
        location: "Alexandria, Egypt",
    },
    {
        name: "Ahmed Mohammed",
        role: "Frontend Developer",
        skills: ["C#", "ASP.NET", "OOP", "Data Structures"],
        picture: "/assets/mentors/ahmed-mohammed.png",
        location: "Alexandria, Egypt",
    },
    {
        name: "John Doe",
        role: "Figma Designer",
        skills: ["C#", "ASP.NET", "OOP", "Data Structures"],
        picture: "/assets/mentors/john-doe.png",
        location: "Alexandria, Egypt",
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
            "Frontend development builds the parts of websites users see and interact with, using HTML, CSS, and JavaScript for design and responsiveness.",
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
        name: "C# Basics",
        category: "Backend",
        items: 10,
        description:
            "Frontend development builds the parts of websites users see and interact with, using HTML, CSS, and JavaScript for design and responsiveness.",
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
