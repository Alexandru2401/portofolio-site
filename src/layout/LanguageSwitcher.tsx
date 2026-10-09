import { Menu } from "@base-ui/react/menu";
import { Check, ChevronDown, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { languages, type Language } from "@/i18n";

/** Dropdown RO / EN din navbar; alegerea se salvează (vezi i18n/index.ts). */
export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const current = i18n.resolvedLanguage as Language;

  return (
    // modal={false}: fără scroll lock — altfel Chrome înlocuiește scrollbar-ul
    // cu unul gol, alb, cât timp meniul e deschis
    <Menu.Root modal={false}>
      <Menu.Trigger
        aria-label={t("nav.language")}
        className="group flex h-9 items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 text-sm font-medium text-white uppercase transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 data-popup-open:bg-white/15"
      >
        <Languages aria-hidden size={16} />
        {current}
        <ChevronDown
          aria-hidden
          size={14}
          className="opacity-60 transition-transform group-data-popup-open:rotate-180"
        />
      </Menu.Trigger>

      <Menu.Portal>
        <Menu.Positioner sideOffset={8} align="end" className="z-50">
          <Menu.Popup className="min-w-36 origin-(--transform-origin) rounded-xl border border-white/15 bg-[#1A1622]/95 p-1 text-sm text-white shadow-lg shadow-black/40 backdrop-blur-xl transition-[opacity,scale] duration-150 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0">
            <Menu.RadioGroup
              value={current}
              onValueChange={(lng: Language) => void i18n.changeLanguage(lng)}
            >
              {languages.map(({ code, label }) => (
                <Menu.RadioItem
                  key={code}
                  value={code}
                  lang={code}
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-white/80 outline-none select-none data-checked:text-white data-highlighted:bg-white/10 data-highlighted:text-white"
                >
                  <span className="w-6 text-xs font-medium tracking-wider text-yellow-400 uppercase">
                    {code}
                  </span>
                  {label}
                  <Menu.RadioItemIndicator className="ml-auto text-yellow-400">
                    <Check aria-hidden size={14} />
                  </Menu.RadioItemIndicator>
                </Menu.RadioItem>
              ))}
            </Menu.RadioGroup>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
