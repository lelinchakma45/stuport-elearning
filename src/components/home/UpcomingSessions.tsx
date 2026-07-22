import { CalendarClock, Video } from "lucide-react";
import { upcomingSessions } from "@/lib/sessions";
import { themeStyles } from "@/lib/courses";

export default function UpcomingSessions() {
  return (
    <section className="mt-9">
      <div className="flex items-center justify-between">
        <h2 className="text-[15px] font-bold text-[#181826]">Upcoming tutoring sessions</h2>
        <a href="#" className="text-[13px] font-medium text-brand hover:underline">
          See all
        </a>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm">
        {upcomingSessions.map((session, i) => (
          <div
            key={session.id}
            className={`flex flex-wrap items-center gap-4 px-5 py-4 ${
              i !== upcomingSessions.length - 1 ? "border-b border-black/5" : ""
            }`}
          >
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold text-white"
              style={{ backgroundColor: themeStyles[session.theme].bg }}
            >
              {session.initials}
            </span>

            <div className="min-w-[160px] flex-1">
              <p className="text-[14px] font-bold text-[#181826]">{session.tutor}</p>
              <p className="text-[12.5px] text-[#8B8B96]">{session.subject}</p>
            </div>

            <div className="flex items-center gap-1.5 text-[12.5px] text-[#5B5B68]">
              <CalendarClock className="h-3.5 w-3.5" strokeWidth={1.8} />
              {session.date} · {session.time}
            </div>

            <span className="rounded-full bg-black/[0.04] px-2.5 py-1 text-[11px] font-medium text-[#5B5B68]">
              {session.mode}
            </span>

            <button className="ml-auto flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-[12.5px] font-semibold text-white hover:opacity-90">
              <Video className="h-3.5 w-3.5" strokeWidth={2} />
              Join
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
