import { BadgePercent } from "lucide-react";

export default function PromoBanner() {
  return (
    <div
      className="diagonal-stripes relative mt-6 flex flex-col items-start justify-between gap-4 overflow-hidden rounded-2xl px-7 py-6 sm:flex-row sm:items-center"
      style={{ backgroundColor: "#1F114E" }}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
          <BadgePercent className="h-5 w-5 text-white" strokeWidth={2} />
        </span>
        <div>
          <h3 className="text-[16px] font-bold text-white">
            Bundle 2+ courses and save 20%
          </h3>
          <p className="mt-1 text-[13px] text-white/70">
            Combine UCAT, GAMSAT, or BMAT prep with tutoring and pay less across the board.
          </p>
        </div>
      </div>
      <button className="shrink-0 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-brand-dark hover:opacity-90">
        View bundles
      </button>
    </div>
  );
}
