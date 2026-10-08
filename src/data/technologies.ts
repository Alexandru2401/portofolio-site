import type { IconType } from "react-icons";
import { FaTheaterMasks } from "react-icons/fa";
import {
  SiExpress,
  SiGit,
  SiGithubactions,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRender,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVitest,
} from "react-icons/si";

export interface Tech {
  name: string;
  role: string;
  icon: IconType;
  color: string;
}

export interface StackLayer {
  title: string;
  description: string;
  tech: Tech[];
}

// lista vine din tehnologies.md
export const stackLayers: StackLayer[] = [
  {
    title: "Frontend",
    description: "Interfața: componente, stil și logica din browser.",
    tech: [
      { name: "TypeScript", role: "Tipuri, mai puține bug-uri", icon: SiTypescript, color: "#3178C6" },
      { name: "React", role: "Interfețe din componente", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", role: "Rendering pe server și rutare", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", role: "Stil direct în markup", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "shadcn/ui", role: "Componente accesibile", icon: SiShadcnui, color: "#FFFFFF" },
    ],
  },
  {
    title: "Backend",
    description: "API-urile din spatele interfeței și regulile care le păzesc.",
    tech: [
      { name: "Node.js", role: "JavaScript pe server", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", role: "Rute și API-uri REST", icon: SiExpress, color: "#FFFFFF" },
    ],
  },
  {
    title: "Database",
    description: "Unde stau datele și cum ajung în siguranță la aplicație.",
    tech: [
      { name: "PostgreSQL", role: "Bază de date relațională", icon: SiPostgresql, color: "#4169E1" },
      { name: "Supabase", role: "Postgres, auth și storage", icon: SiSupabase, color: "#3FCF8E" },
    ],
  },
  {
    title: "Testing",
    description: "Siguranța că o schimbare nouă nu strică ce mergea deja.",
    tech: [
      { name: "Vitest", role: "Teste unitare rapide", icon: SiVitest, color: "#6E9F18" },
      { name: "React Testing Library", role: "Componente testate ca un user", icon: SiTestinglibrary, color: "#E33332" },
      // react-icons nu are logo Playwright — măștile sunt chiar simbolul lor
      { name: "Playwright", role: "Teste end-to-end în browser", icon: FaTheaterMasks, color: "#2EAD33" },
    ],
  },
  {
    title: "Livrare",
    description: "Tot ce duce codul de pe laptop până la utilizator.",
    tech: [
      { name: "Git", role: "Istoric și ramuri", icon: SiGit, color: "#F05032" },
      { name: "GitHub Actions", role: "Teste și deploy automat", icon: SiGithubactions, color: "#2088FF" },
      { name: "Vite", role: "Dev server și build", icon: SiVite, color: "#9135FF" },
      { name: "Vercel", role: "Deploy pentru Next.js", icon: SiVercel, color: "#FFFFFF" },
      { name: "Netlify", role: "Deploy la fiecare push", icon: SiNetlify, color: "#00C7B7" },
      { name: "Render", role: "Hosting pentru API-uri", icon: SiRender, color: "#FFFFFF" },
    ],
  },
];
