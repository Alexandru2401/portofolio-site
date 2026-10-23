import { cn } from "@/lib/utils";

/** Bandă de cifre: valoarea mare sus, eticheta mică dedesubt, separate prin linii (carduri de proiect, Despre mine). */
export default function StatStrip({
  items,
  className,
}: {
  items: { value: string; label: string }[];
  className?: string;
}) {
  if (items.length === 0) return null;
  return (
    <dl className={cn("flex divide-x divide-white/10 overflow-hidden", className)}>
      {items.map(({ value, label }) => (
        <div
          key={label}
          className="flex min-w-0 flex-1 flex-col-reverse items-center gap-0.5 py-2 text-center"
        >
          <dt className="text-[0.6875rem] leading-tight text-balance font-medium tracking-wider text-slate-200/55 uppercase">
            {label}
          </dt>
          <dd className="text-lg leading-none font-semibold text-slate-100 tabular-nums">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
