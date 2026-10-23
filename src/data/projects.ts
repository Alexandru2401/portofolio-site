import type { IconType } from "react-icons";
import { BsTypescript } from "react-icons/bs";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiNextdotjs,
  SiPostgresql,
  SiSupabase,
} from "react-icons/si";
import financeDashboard from "@/assets/projects/finance-app/cta.png";
import financeTransactions from "@/assets/projects/finance-app/cta2.png";
import financeMobile from "@/assets/projects/finance-app/hero.png";
import financeLogo from "@/assets/projects/finance-app/logo.png";
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
  next: { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  tailwind: { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#38BDF8" },
  typescript: { name: "TypeScript", icon: BsTypescript, color: "#3178C6" },
  node: { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
  express: { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  postgres: { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  supabase: { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
} satisfies Record<string, ProjectTech>;

export type ProjectId = keyof Messages["projects"]["items"];

interface ProjectData {
  /** apare în URL: /proiecte/:id; textele sunt în i18n/locales sub projects.items.<id> */
  id: ProjectId;
  year: string;
  /** afișat pe card ca badge „Proiect client” / „Proiect personal” */
  projectType: "personal" | "client";
  client?: string;
  tech: ProjectTech[];
  liveUrl?: string;
  repoUrl?: string;
  /** demo video (ex. în /public/videos); fără el popup-ul arată un placeholder */
  video?: string;
  /** imaginea afișată înainte de play; fără ea se folosește primul cadru */
  poster?: string;
  /** screenshot-urile din caruselul paginii de detalii; prima apare și pe card */
  images?: string[];
  /** logo-ul afișat lângă titlu în pagina de detalii */
  logo?: string;
}

/** datele proiectului + textele în limba curentă */
export type Project = ProjectData & Messages["projects"]["items"][ProjectId];

// TODO: înlocuiește cu proiectele reale
const projectData: ProjectData[] = [
  {
    id: "finance-app",
    year: "2024",
    projectType: "personal",
    tech: [
      tech.react,
      tech.typescript,
      tech.tailwind,
      tech.express,
      tech.postgres,
      tech.supabase,
    ],
    liveUrl: "https://savingbox.netlify.app/",
    repoUrl: "#",
    logo: financeLogo,
    images: [financeDashboard, financeTransactions, financeMobile],
  },
  {
    id: "ceramico",
    year: "2025",
    projectType: "client",
    client: "Ceramico",
    tech: [tech.next, tech.typescript, tech.tailwind, tech.supabase],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export function useProjects(): Project[] {
  const { projects } = useMessages();
  return projectData.map((data) => ({ ...data, ...projects.items[data.id] }));
}
