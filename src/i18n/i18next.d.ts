import "i18next";
import type { Messages } from "./locales/ro";

// cheile din t() sunt verificate de TypeScript
declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: { translation: Messages };
  }
}
