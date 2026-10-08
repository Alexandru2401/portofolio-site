import antenaLogo from "@/assets/antena_group_logo.webp";
import fidemLogo from "@/assets/fidem_logo.png";

export interface Job {
  role: string;
  company: string;
  /** opțional — fără logo apar inițialele firmei */
  logo?: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
}

// TODO: înlocuiește cu experiența reală, de la cel mai recent job în jos
export const jobs: Job[] = [
  {
    role: "Fullstack Developer",
    company: "Fidem",
    logo: fidemLogo,
    period: "Sep. 2025 — prezent",
    location: "București, România",
    description:
      "O frază despre ce face compania și care e rolul tău în echipă.",
    highlights: [
      "Am construit un CRM pentru call center, de la design la deploy.",
      "Un rezultat concret, cu o cifră dacă se poate (ex. timp de încărcare -40%).",
    ],
    tech: ["React", "TypeScript", "Node.js"],
  },
  {
    role: "Network Admin",
    company: "Antena Group",
    logo: antenaLogo,
    period: " Feb. 2025 — Sep. 2025",
    location: "București, România",
    description:
      "O frază despre ce face compania și care e rolul tău în echipă.",
    highlights: [
      "Am dezvoltat un catalog de produse cu dashboard de administrare.",
      "Un lucru de care ești mândru din perioada asta.",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS"],
  },
];
