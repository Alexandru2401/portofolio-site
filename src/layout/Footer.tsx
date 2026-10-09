import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-white/10 bg-[#0D0B12] text-sm text-white/40">
      <div className="mx-auto w-[min(72rem,90%)] py-6 text-center">
        <p>© {new Date().getFullYear()} Alex · {t("footer.builtWith")}</p>
      </div>
    </footer>
  );
}
