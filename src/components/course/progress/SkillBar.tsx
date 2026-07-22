import type { SkillScore } from "@/lib/progress";

export default function SkillBar({ label, studentsPct, yourPct }: SkillScore) {
  return (
    <div className="border-t border-black/5 pt-3.5 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-center justify-between gap-2 text-[12.5px]">
        <span className="font-semibold text-[#181826]">{label}</span>
        <span className="flex items-center gap-3 text-[#8B8B96]">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#F0A73C]" />
            Students: {studentsPct}%
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-brand" />
            You: {yourPct}%
          </span>
        </span>
      </div>

      <div className="relative mt-3.5 h-1.5 w-full rounded-full bg-[#ECECF0]">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-brand"
          style={{ width: `${yourPct}%` }}
        />
        <span
          className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 -translate-x-1/2 rounded-full bg-[#F0A73C]"
          style={{ left: `${studentsPct}%` }}
        />
        <span
          className="absolute top-1/2 h-3 w-3 -translate-y-1/2 -translate-x-1/2 rounded-full border-2 border-white bg-brand shadow-sm"
          style={{ left: `${yourPct}%` }}
        />
      </div>
    </div>
  );
}
