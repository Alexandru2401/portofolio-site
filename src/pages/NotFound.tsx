import { Link, useLocation, useNavigate } from "react-router";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      {/* glow discret în spatele cifrelor */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-[min(72rem,90%)] text-center">
        <p className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
          <span className="size-1.5 rounded-full bg-rose-400 shadow-[0_0_12px] shadow-rose-400/70" />
          Eroare 404
        </p>

        <h1
          className="mt-5 select-none text-[clamp(7rem,28vw,16rem)] font-semibold leading-[0.85] tracking-tighter text-transparent"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.55)" }}
        >
          404
        </h1>

        <h2 className="mt-4 text-[clamp(1.5rem,4vw,2.5rem)] font-semibold tracking-tight text-white">
          Pagina nu a fost găsită
        </h2>

        <p className="mx-auto mt-4 max-w-md text-pretty text-white/60">
          Adresa{" "}
          <code className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-sm text-white/80">
            {pathname}
          </code>{" "}
          nu există sau a fost mutată.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
          >
            <Home size={14} />
            Acasă
          </Link>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
          >
            <ArrowLeft
              size={14}
              className="opacity-50 transition-transform group-hover:-translate-x-0.5"
            />
            Înapoi
          </button>
        </div>
      </div>
    </section>
  );
}
