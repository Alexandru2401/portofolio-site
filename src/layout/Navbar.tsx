import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { twMerge } from "tailwind-merge";

const links = [
  { to: "/about", label: "About" },
  { to: "/technologies", label: "Technologies" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const linkClass = (isActive: boolean) =>
  twMerge(
    "rounded-full px-4 py-2 text-sm transition-colors",
    "text-white/70 hover:text-white hover:bg-white/10",
    isActive && "bg-white/15 text-white",
  );

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto w-[min(64rem,92%)]">
      <nav className="rounded-2xl border border-white/15 bg-white/10 shadow-lg shadow-black/20 backdrop-blur-xl backdrop-saturate-150">
        <div className="flex items-center justify-between px-5 py-3">
          <NavLink to="/" className="font-semibold tracking-tight text-white">
            Alex
          </NavLink>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => linkClass(isActive)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Meniu"
            aria-expanded={open}
            className="rounded-lg p-2 text-white/80 hover:bg-white/10 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <ul className="flex flex-col gap-1 border-t border-white/10 px-3 py-3 md:hidden">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    twMerge(linkClass(isActive), "block")
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
