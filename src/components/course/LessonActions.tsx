import { Bookmark, CheckCircle2, PlayCircle } from "lucide-react";

export default function LessonActions({ title }: { title: string }) {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
      <h2 className="text-[16px] font-bold text-[#181826]">{title}</h2>
      <div className="flex items-center gap-2">
        <button
          aria-label="Bookmark lesson"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 text-[#4B4B57] hover:border-black/20"
        >
          <Bookmark className="h-4 w-4" strokeWidth={1.8} />
        </button>
        <button className="flex items-center gap-1.5 rounded-lg border border-black/10 px-3 py-2 text-[13px] font-medium text-[#4B4B57] hover:border-black/20">
          <PlayCircle className="h-4 w-4" strokeWidth={1.8} />
          Practice this course
        </button>
        <button className="flex items-center gap-1.5 rounded-lg border border-black/10 px-3 py-2 text-[13px] font-medium text-[#4B4B57] hover:border-black/20">
          <CheckCircle2 className="h-4 w-4" strokeWidth={1.8} />
          Mark as completed
        </button>
      </div>
    </div>
  );
}
