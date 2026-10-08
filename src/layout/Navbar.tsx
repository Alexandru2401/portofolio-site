import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Download, Menu, X } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { CV_URL } from "@/data/links";

// în ordinea secțiunilor din pages/Home.tsx
const links = [
  { id: "projects", label: "Proiecte" },
  { id: "about-me", label: "Despre mine" },
  { id: "experience", label: "Experiență" },
  { id: "stack", label: "Tehnologii" },
  { id: "contact", label: "Contact" },
];

// TODO: pune profilul real
const LINKEDIN_URL = "https://linkedin.com/in/...";

const linkedinClass =
  "flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 text-sm font-medium text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60";

const cvClass =
  "flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60";

const linkClass = (isActive: boolean) =>
  twMerge(
    "rounded-full px-4 py-2 text-sm transition-colors",
    "text-white/80 hover:text-white hover:bg-white/10",
    isActive && "bg-white/15 text-white",
  );

function useActiveSection() {
  const { pathname } = useLocation();
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    for (const { id } of [{ id: "hero" }, ...links]) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => {
      observer.disconnect();
      setActive(null);
    };
    // secțiunile există doar pe Home — le caută din nou la fiecare schimbare de pagină
  }, [pathname]);

  return active;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto w-full md:top-4 md:w-[min(64rem,92%)]">
      <nav
        className={twMerge(
          "border-b border-white/15 bg-[#1A1622]/80 shadow-lg shadow-black/30 backdrop-blur-xl backdrop-saturate-150 md:border",
          open ? "md:rounded-3xl" : "md:rounded-full",
        )}
      >
        <div className="flex items-center justify-between py-2 pr-2 pl-5">
          <Link
            to="/#hero"
            className="font-semibold tracking-tight text-white"
            onClick={() => setOpen(false)}
          >
            Alex
          </Link>

          <div className="flex items-center gap-1">
            <ul className="mr-2 hidden items-center gap-1 lg:flex">
              {links.map(({ id, label }) => (
                <li key={id}>
                  <Link
                    to={`/#${id}`}
                    aria-current={active === id ? "true" : undefined}
                    className={linkClass(active === id)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={twMerge(linkedinClass, "size-9")}
            >
              <FaLinkedin aria-hidden size={18} />
            </a>
            <a
              href={CV_URL}
              download
              aria-label="Descarcă CV"
              className={twMerge(
                cvClass,
                "size-9 justify-center p-0 md:size-auto md:px-4 md:py-2",
              )}
            >
              <Download aria-hidden size={16} />
              <span className="hidden md:inline">Descarcă CV</span>
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Meniu"
              aria-expanded={open}
              className="ml-1 grid size-9 place-items-center rounded-full text-white/80 hover:bg-white/10 lg:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <ul className="flex flex-col gap-1 border-t border-white/10 px-3 py-3 lg:hidden">
            {links.map(({ id, label }) => (
              <li key={id}>
                <Link
                  to={`/#${id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === id ? "true" : undefined}
                  className={twMerge(linkClass(active === id), "block")}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
