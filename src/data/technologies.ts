import type { IconType } from "react-icons";
import {
  SiCss,
  SiEslint,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNetlify,
  SiNodedotjs,
  SiReact,
  SiReactrouter,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebgl,
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

// TODO: verifică lista — Figma și Express sunt presupuneri, restul apar în proiect
export const stackLayers: StackLayer[] = [
  {
    title: "Design & interfață",
    description: "Cum arată și cum se simte: layout, stil, componente.",
    tech: [
      { name: "Figma", role: "Machete și prototipuri", icon: SiFigma, color: "#F24E1E" },
      { name: "HTML", role: "Structură semantică", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", role: "Layout și animații", icon: SiCss, color: "#663399" },
      { name: "Tailwind CSS", role: "Stil direct în markup", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "shadcn/ui", role: "Componente accesibile", icon: SiShadcnui, color: "#FFFFFF" },
    ],
  },
  {
    title: "Frontend",
    description: "Logica din browser: stare, rutare, interacțiuni.",
    tech: [
      { name: "JavaScript", role: "Limbajul de bază", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", role: "Tipuri, mai puține bug-uri", icon: SiTypescript, color: "#3178C6" },
      { name: "React", role: "Interfețe din componente", icon: SiReact, color: "#61DAFB" },
      { name: "React Router", role: "Navigare între pagini", icon: SiReactrouter, color: "#CA4245" },
      { name: "WebGL", role: "Efecte vizuale pe GPU", icon: SiWebgl, color: "#E44D26" },
    ],
  },
  {
    title: "API & server",
    description: "Datele din spatele interfeței și regulile care le păzesc.",
    tech: [
      { name: "Node.js", role: "JavaScript pe server", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", role: "Rute și API-uri REST", icon: SiExpress, color: "#FFFFFF" },
    ],
  },
  {
    title: "Livrare & unelte",
    description: "Tot ce duce codul de pe laptop până la utilizator.",
    tech: [
      { name: "Git", role: "Istoric și ramuri", icon: SiGit, color: "#F05032" },
      { name: "GitHub", role: "Cod, review, colaborare", icon: SiGithub, color: "#FFFFFF" },
      { name: "Vite", role: "Dev server și build", icon: SiVite, color: "#9135FF" },
      { name: "ESLint", role: "Cod curat, constant", icon: SiEslint, color: "#7C6CF0" },
      { name: "Netlify", role: "Deploy la fiecare push", icon: SiNetlify, color: "#00C7B7" },
    ],
  },
];
