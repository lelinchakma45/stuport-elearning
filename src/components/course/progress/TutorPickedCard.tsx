import { ChevronLeft, ChevronRight } from "lucide-react";
import { pickedTutors } from "@/lib/progress";

export default function TutorPickedCard() {
  return (
    <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-[14.5px] font-bold text-[#181826]">Tutor picked for you</h3>
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

      <div className="mt-3 flex flex-col gap-3.5">
        {pickedTutors.map((tutor) => (
          <div key={tutor.name} className="flex items-center gap-3">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white"
              style={{ backgroundColor: tutor.color }}
            >
              {tutor.initials}
            </span>
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold text-[#181826]">{tutor.name}</p>
              <p className="truncate text-[11.5px] text-[#8B8B96]">{tutor.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
