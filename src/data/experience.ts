export interface Job {
  role: string;
  company: string;
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
    company: "Numele companiei",
    period: "2023 — prezent",
    location: "Remote",
    description:
      "O frază despre ce face compania și care e rolul tău în echipă.",
    highlights: [
      "Am construit un CRM pentru call center, de la design la deploy.",
      "Un rezultat concret, cu o cifră dacă se poate (ex. timp de încărcare -40%).",
    ],
    tech: ["React", "TypeScript", "Node.js"],
  },
  {
    role: "Frontend Developer",
    company: "Numele companiei",
    period: "2021 — 2023",
    location: "București, RO",
    description:
      "O frază despre ce face compania și care e rolul tău în echipă.",
    highlights: [
      "Am dezvoltat un catalog de produse cu dashboard de administrare.",
      "Un lucru de care ești mândru din perioada asta.",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS"],
  },
];
