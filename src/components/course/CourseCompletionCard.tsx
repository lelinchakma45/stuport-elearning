import { Trophy } from "lucide-react";

export default function CourseCompletionCard({
  watched,
  total,
  percent,
  studentName,
}: {
  watched: number;
  total: number;
  percent: number;
  studentName: string;
}) {
  return (
    <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="flex items-center gap-1.5 text-[13.5px] font-bold text-[#181826]">
            <Trophy className="h-4 w-4 text-[#C9A352]" strokeWidth={1.5} fill="#F0C75E" />
            Course completion
          </p>
          <p className="mt-0.5 text-[12px] text-[#8B8B96]">
            {watched}/{total} tutorial watched
          </p>
        </div>
        <span className="shrink-0 text-[20px] font-extrabold text-[#181826]">{percent}%</span>
      </div>

      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#ECECF0]">
        <div className="h-full rounded-full bg-brand" style={{ width: `${percent}%` }} />
      </div>

      <p className="mt-3 text-[12.5px] leading-relaxed text-[#8B8B96]">
        Fantastic work <span className="font-semibold text-[#181826]">{studentName}</span>, 🚀
        You&apos;re well on your way to becoming an expert in this course. Your commitment to
        learning is truly impressive - finish strong! 💪
      </p>
    </div>
  );
}
