import antenaLogo from "@/assets/antena_group_logo.webp";
import fidemLogo from "@/assets/fidem_logo.png";
import { useMessages } from "@/i18n";
import type { Messages } from "@/i18n/locales/ro";

type JobId = keyof Messages["experience"]["jobs"];

interface JobData {
  /** textele sunt în i18n/locales sub experience.jobs.<id> */
  id: JobId;
  company: string;
  /** opțional — fără logo apar inițialele firmei */
  logo?: string;
  tech: string[];
}

/** datele jobului + textele în limba curentă */
export type Job = JobData & Messages["experience"]["jobs"][JobId];

// TODO: înlocuiește cu experiența reală, de la cel mai recent job în jos
const jobData: JobData[] = [
  {
    id: "fidem",
    company: "Fidem",
    logo: fidemLogo,
    tech: ["React", "TypeScript", "Node.js"],
  },
  {
    id: "antena",
    company: "Antena Group",
    logo: antenaLogo,
    tech: ["React", "JavaScript", "Tailwind CSS"],
  },
];

export function useJobs(): Job[] {
  const { experience } = useMessages();
  return jobData.map((data) => ({ ...data, ...experience.jobs[data.id] }));
}
