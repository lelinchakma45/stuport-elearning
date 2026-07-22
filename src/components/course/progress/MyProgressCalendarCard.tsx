import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CalendarLevel } from "@/lib/progress";
import { progressCalendar } from "@/lib/progress";

const weekdays = ["M", "T", "W", "T", "F", "S", "S"];

const levelClass: Record<CalendarLevel, string> = {
  none: "bg-[#F3F3F6]",
  some: "bg-[#D9D3FA]",
  most: "bg-[#4433C9]",
  testdate: "bg-[#E14B5A]",
};

function MiniCalendar({ name, cells }: { name: string; cells: CalendarLevel[] }) {
  return (
    <div>
      <p className="text-[12px] font-semibold text-[#181826]">{name}</p>
      <div className="mt-2 grid grid-cols-7 gap-1">
        {weekdays.map((d, i) => (
          <span key={`${d}-${i}`} className="text-center text-[9px] font-medium text-[#B5B5BD]">
            {d}
          </span>
        ))}
        {cells.map((level, i) => (
          <span key={i} className={`aspect-square rounded ${levelClass[level]}`} />
        ))}
      </div>
    </div>
  );
}

export default function MyProgressCalendarCard() {
  return (
    <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-[14.5px] font-bold text-[#181826]">My progress</h3>
        <div className="flex items-center gap-1">
          <button
            aria-label="Previous"
            className="flex h-6 w-6 items-center justify-center rounded-md border border-black/10 text-[#8B8B96] hover:text-[#181826]"
          >
            <ChevronLeft className="h-3.5 w-3.5" strokeWidth={2} />
          </button>
          <button
            aria-label="Next"
            className="flex h-6 w-6 items-center justify-center rounded-md border border-black/10 text-[#8B8B96] hover:text-[#181826]"
          >
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
          </button>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#F5F0FF] px-3 py-2.5">
        <span className="flex h-8 w-8 flex-col items-center justify-center rounded-md bg-brand text-white">
          <span className="text-[11px] font-bold leading-none">08</span>
          <span className="text-[7px] uppercase leading-none">Oct</span>
        </span>
        <p className="text-[12.5px] text-[#5B5B68]">
          Good Morning, <span className="font-semibold italic text-[#181826]">Minhas</span>
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        {progressCalendar.map((month) => (
          <MiniCalendar key={month.name} name={month.name} cells={month.cells} />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 text-[11px] text-[#8B8B96]">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-[#F3F3F6]" />
          No questions
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-brand" />
          Most questions
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-[#D9D3FA]" />
          Some questions
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-[#E14B5A]" />
          Your Test Date
        </span>
      </div>
    </div>
  );
}
