import { railActive } from "@/lib/rail";
import { cn } from "@/lib/utils";

/**
 * Titlul unei secțiuni, pus pe bara galbenă. Se aprinde când bara ajunge la el
 * și duce la secțiunea respectivă la click.
 */
export default function RailCheckpoint({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      ref={railActive()}
      href={href}
      className={cn(
        "group/cp relative z-10 inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-white/15 bg-[#0D0B12] px-5 text-sm font-medium text-white/60 transition-all duration-500",
        "hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400",
        "data-active:border-yellow-400 data-active:bg-yellow-400 data-active:text-[#1A1622] data-active:shadow-[0_0_32px_-4px_rgb(250_204_21/0.75)]",
        className,
      )}
    >
      <span
        aria-hidden
        className="size-1.5 rounded-full bg-white/40 transition-colors duration-500 group-data-active/cp:bg-[#1A1622]"
      />
      {label}
      {/* undă care pornește o dată, în momentul în care bara atinge checkpoint-ul */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full border-2 border-yellow-400 opacity-0 motion-safe:group-data-active/cp:animate-checkpoint-ping"
      />
    </a>
  );
}
