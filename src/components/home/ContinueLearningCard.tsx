import Link from "next/link";
import { Play } from "lucide-react";
import { tutorials } from "@/lib/tutorial";

export default function ContinueLearningCard() {
  const lesson = tutorials.find((t) => t.id === "verbal-reasoning")!;

  return (
    <div className="mt-5 flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm sm:flex-row">
      <div className="diagonal-stripes relative flex h-32 shrink-0 items-center justify-center overflow-hidden bg-[#1F114E] sm:h-auto sm:w-56">
        <span className="select-none text-2xl font-extrabold tracking-wide text-white/95">UCAT</span>
        <span className="absolute inset-0 flex items-center justify-center bg-black/10">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
            <Play className="h-4.5 w-4.5 translate-x-0.5" strokeWidth={1.8} fill="currentColor" />
          </span>
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-2 p-5">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-brand">
          Continue learning
        </span>
        <h3 className="text-[16px] font-bold text-[#181826]">{lesson.title}</h3>
        <p className="text-[12.5px] text-[#8B8B96]">UCAT · Tutorials · {lesson.meta}</p>

        <div className="mt-1 flex items-center gap-3">
          <div className="h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-[#ECECF0]">
            <div className="h-full rounded-full bg-brand" style={{ width: `${lesson.progress ?? 0}%` }} />
          </div>
          <span className="shrink-0 text-[11.5px] font-semibold text-[#8B8B96]">
            {lesson.progress ?? 0}%
          </span>
        </div>

        <Link
          href="/courses/ucat"
          className="mt-2 flex w-fit items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-[12.5px] font-semibold text-white hover:opacity-90"
        >
          <Play className="h-3.5 w-3.5" strokeWidth={2} fill="currentColor" />
          Resume lesson
        </Link>
      </div>
    </div>
  );
}
