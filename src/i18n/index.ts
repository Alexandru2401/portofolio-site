import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { en } from "./locales/en";
import { ro, type Messages } from "./locales/ro";

export const languages = [
  { code: "ro", label: "Română" },
  { code: "en", label: "English" },
] as const;

export type Language = (typeof languages)[number]["code"];

const messages: Record<Language, Messages> = { ro, en };

const STORAGE_KEY = "lang";

const isLanguage = (value: unknown): value is Language =>
  languages.some(({ code }) => code === value);

// alegerea salvată, altfel limba browserului; română doar pentru cine are
// browserul în română — un recruiter din afară vede direct engleza
function initialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(saved)) return saved;
  } catch {
    // localStorage blocat (mod privat etc.) — mergem pe limba browserului
  }
  return navigator.language.toLowerCase().startsWith("ro") ? "ro" : "en";
}

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    // nu se salvează alegerea, dar schimbarea merge
  }
});

void i18n.use(initReactI18next).init({
  resources: {
    ro: { translation: ro },
    en: { translation: en },
  },
  lng: initialLanguage(),
  fallbackLng: "ro",
  // React escapează deja textul
  interpolation: { escapeValue: false },
});

document.documentElement.lang = i18n.language;

/**
 * Tot obiectul de traduceri pentru limba curentă, cu tipuri — pentru
 * conținutul structurat (proiecte, joburi, liste) unde `t()` cu chei
 * dinamice ar pierde tipurile.
 */
export function useMessages(): Messages {
  const { i18n: instance } = useTranslation();
  const lng = isLanguage(instance.resolvedLanguage)
    ? instance.resolvedLanguage
    : "ro";
  return messages[lng];
}

export default i18n;
