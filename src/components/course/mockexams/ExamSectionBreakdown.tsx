import type { SectionResult } from "@/lib/examDetails";
import SkillBar from "../progress/SkillBar";

export default function ExamSectionBreakdown({ sections }: { sections: SectionResult[] }) {
  return (
    <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
      <h3 className="text-[14.5px] font-bold text-[#181826]">Section breakdown</h3>
      <div className="mt-4 flex flex-col gap-3.5">
        {sections.map((section) => (
          <SkillBar
            key={section.name}
            label={`${section.name} (${section.correct}/${section.total})`}
            studentsPct={section.avgScore}
            yourPct={section.yourScore}
          />
        ))}
      </div>
    </div>
  );
}
