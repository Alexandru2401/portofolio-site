import type { IconType } from "react-icons";
import { BsTypescript } from "react-icons/bs";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { useMessages } from "@/i18n";
import type { Messages } from "@/i18n/locales/ro";

export interface ProjectTech {
  name: string;
  icon: IconType;
  color: string;
}

const tech = {
  html: { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  css: { name: "CSS", icon: FaCss3, color: "#1572B6" },
  react: { name: "React", icon: FaReact, color: "#61DAFB" },
  tailwind: { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#38BDF8" },
  typescript: { name: "TypeScript", icon: BsTypescript, color: "#3178C6" },
  node: { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
} satisfies Record<string, ProjectTech>;

export type ProjectId = keyof Messages["projects"]["items"];

interface ProjectData {
  /** apare în URL: /proiecte/:id; textele sunt în i18n/locales sub projects.items.<id> */
  id: ProjectId;
  year: string;
  tech: ProjectTech[];
  liveUrl?: string;
  repoUrl?: string;
}

/** datele proiectului + textele în limba curentă */
export type Project = ProjectData & Messages["projects"]["items"][ProjectId];

// TODO: înlocuiește cu proiectele reale
const projectData: ProjectData[] = [
  {
    id: "crm-call-center",
    year: "2024",
    tech: [tech.react, tech.typescript, tech.tailwind, tech.node],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "catalog-produse",
    year: "2023",
    tech: [tech.react, tech.typescript, tech.tailwind, tech.node],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "proiect-3",
    year: "2023",
    tech: [tech.html, tech.css, tech.react],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export function useProjects(): Project[] {
  const { projects } = useMessages();
  return projectData.map((data) => ({ ...data, ...projects.items[data.id] }));
}
