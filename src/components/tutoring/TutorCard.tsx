import { Star } from "lucide-react";
import type { Tutor } from "@/lib/tutors";

export default function TutorCard({ tutor }: { tutor: Tutor }) {
  return (
    <div className="flex flex-col rounded-xl border border-black/5 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold text-white"
          style={{ backgroundColor: tutor.color }}
        >
          {tutor.initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-[14px] font-bold text-[#181826]">{tutor.name}</p>
          <p className="truncate text-[11.5px] text-[#8B8B96]">{tutor.specialty}</p>
          <div className="mt-1 flex items-center gap-1 text-[11.5px] text-[#8B8B96]">
            <Star className="h-3 w-3" strokeWidth={0} fill="#F4CB15" />
            {tutor.rating} · {tutor.sessionsCompleted} sessions
          </div>
        </div>
      </div>

      <p className="mt-3 line-clamp-2 text-[12.5px] leading-relaxed text-[#5B5B68]">{tutor.bio}</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {tutor.subjects.map((subject) => (
          <span
            key={subject}
            className="rounded-full bg-[#ECEEFD] px-2 py-0.5 text-[10.5px] font-semibold text-brand"
          >
            {subject}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-3">
        <span className="text-[13px] font-bold text-[#181826]">
          £{tutor.pricePerHour}
          <span className="text-[11px] font-normal text-[#8B8B96]">/hour</span>
        </span>
        <button className="rounded-full bg-brand px-4 py-2 text-[12.5px] font-semibold text-white hover:opacity-90">
          Book session
        </button>
      </div>
    </div>
  );
}
