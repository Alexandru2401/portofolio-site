import type { IconType } from "react-icons";
import type { Messages } from "@/i18n/locales/ro";
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
  /** rolul tradus e în i18n/locales sub stack.roles.<name> */
  name: string;
  icon: IconType;
  color: string;
}

export interface StackLayer {
  /** titlul și descrierea traduse sunt în i18n/locales sub stack.layers.<id> */
  id: keyof Messages["stack"]["layers"];
  tech: Tech[];
}

// lista vine din tehnologies.md
export const stackLayers: StackLayer[] = [
  {
    id: "frontend",
    tech: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "shadcn/ui", icon: SiShadcnui, color: "#FFFFFF" },
    ],
  },
  {
    id: "backend",
    tech: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
    ],
  },
  {
    id: "database",
    tech: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
    ],
  },
  {
    id: "testing",
    tech: [
      { name: "Vitest", icon: SiVitest, color: "#6E9F18" },
      { name: "React Testing Library", icon: SiTestinglibrary, color: "#E33332" },
      // react-icons nu are logo Playwright — măștile sunt chiar simbolul lor
      { name: "Playwright", icon: FaTheaterMasks, color: "#2EAD33" },
    ],
  },
  {
    id: "delivery",
    tech: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Vite", icon: SiVite, color: "#9135FF" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "Render", icon: SiRender, color: "#FFFFFF" },
    ],
  },
];
