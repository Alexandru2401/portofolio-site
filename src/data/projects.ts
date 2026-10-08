import type { IconType } from "react-icons";
import { BsTypescript } from "react-icons/bs";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

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

export interface Project {
  /** apare în URL: /proiecte/:id */
  id: string;
  name: string;
  /** o propoziție, sub titlu */
  tagline: string;
  year: string;
  role: string;
  duration: string;
  problem: string;
  solution: string;
  /** contextul complet, pe pagina proiectului */
  overview: string;
  features: string[];
  challenges: { title: string; text: string }[];
  results: { value: string; label: string }[];
  tech: ProjectTech[];
  liveUrl?: string;
  repoUrl?: string;
}

// TODO: înlocuiește cu proiectele reale
export const projects: Project[] = [
  {
    id: "crm-call-center",
    name: "CRM pentru call center",
    tagline: "Toate apelurile, clienții și campaniile într-un singur ecran.",
    year: "2024",
    role: "Fullstack developer",
    duration: "4 luni",
    problem:
      "Agenții lucrau în trei aplicații diferite și pierdeau contextul clientului între apeluri.",
    solution:
      "Un CRM care adună istoricul clientului, scripturile și programările într-o singură interfață.",
    overview:
      "Descrie aici contextul: pentru cine e aplicația, câți oameni o folosesc, ce era înainte și de ce a fost nevoie de ea.",
    features: [
      "Fișa clientului cu tot istoricul de apeluri",
      "Programare de reveniri cu notificări",
      "Dashboard cu statistici pe agent și pe campanie",
      "Roluri și permisiuni pentru agenți și supervizori",
    ],
    challenges: [
      {
        title: "Liste mari fără lag",
        text: "Cum ai rezolvat o problemă tehnică concretă — ex. virtualizarea listelor cu zeci de mii de clienți.",
      },
      {
        title: "Date în timp real",
        text: "O altă provocare și decizia pe care ai luat-o, cu motivul din spatele ei.",
      },
    ],
    results: [
      { value: "-30%", label: "timp mediu pe apel" },
      { value: "50+", label: "agenți activi zilnic" },
      { value: "1", label: "aplicație în loc de 3" },
    ],
    tech: [tech.react, tech.typescript, tech.tailwind, tech.node],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "catalog-produse",
    name: "Catalog de produse",
    tagline: "Catalog public cu dashboard de administrare pentru echipa de vânzări.",
    year: "2023",
    role: "Fullstack developer",
    duration: "3 luni",
    problem:
      "Produsele erau ținute în Excel, iar clienții primeau oferte trimise manual pe email.",
    solution:
      "Un catalog online cu filtre și un panou de administrare din care echipa actualizează produsele singură.",
    overview:
      "Descrie aici contextul: pentru cine e aplicația, câți oameni o folosesc, ce era înainte și de ce a fost nevoie de ea.",
    features: [
      "Căutare și filtre pe categorii, preț și stoc",
      "Dashboard pentru adăugat și editat produse",
      "Import de produse din Excel",
      "Pagini optimizate pentru SEO",
    ],
    challenges: [
      {
        title: "Import din Excel",
        text: "Cum ai validat și curățat datele venite din fișiere scrise de mână.",
      },
      {
        title: "Imagini rapide",
        text: "Cum ai optimizat încărcarea imaginilor de produs.",
      },
    ],
    results: [
      { value: "800+", label: "produse în catalog" },
      { value: "0", label: "oferte trimise manual" },
      { value: "95", label: "scor Lighthouse" },
    ],
    tech: [tech.react, tech.typescript, tech.tailwind, tech.node],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "proiect-3",
    name: "Nume proiect",
    tagline: "O propoziție despre ce face proiectul.",
    year: "2023",
    role: "Frontend developer",
    duration: "1 lună",
    problem: "Ce problemă rezolvă proiectul și pentru cine.",
    solution: "Ce ai construit și cum rezolvă problema.",
    overview:
      "Descrie aici contextul: pentru cine e aplicația, câți oameni o folosesc, ce era înainte și de ce a fost nevoie de ea.",
    features: ["Funcționalitate 1", "Funcționalitate 2", "Funcționalitate 3"],
    challenges: [
      {
        title: "Provocare",
        text: "O problemă tehnică și cum ai rezolvat-o.",
      },
    ],
    results: [
      { value: "—", label: "un rezultat măsurabil" },
      { value: "—", label: "alt rezultat" },
    ],
    tech: [tech.html, tech.css, tech.react],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export const getProject = (id: string | undefined) =>
  projects.find((p) => p.id === id);
