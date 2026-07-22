import Link from "next/link";
import { ArrowRight, Clock, FileQuestion, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { MockExam } from "@/lib/mockExams";

function MetaTile({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-black/5 p-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#ECEEFD] text-brand">
        <Icon className="h-4 w-4" strokeWidth={1.8} />
      </span>
      <div>
        <p className="text-[13px] font-bold text-[#181826]">{value}</p>
        <p className="text-[10.5px] text-[#8B8B96]">{label}</p>
      </div>
    </div>
  );
}

export default function ExamOverviewCard({
  exam,
  instructions,
}: {
  exam: MockExam;
  instructions: string[];
}) {
  return (
    <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <MetaTile icon={Layers} label="Sections" value={String(exam.sections)} />
        <MetaTile icon={FileQuestion} label="Questions" value={String(exam.questions)} />
        <MetaTile icon={Clock} label="Duration" value={exam.duration} />
      </div>

      <h3 className="mt-5 text-[13.5px] font-bold text-[#181826]">Before you start</h3>
      <ul className="mt-2.5 flex flex-col gap-2">
        {instructions.map((line, i) => (
          <li key={i} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-[#5B5B68]">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
            {line}
          </li>
        ))}
      </ul>

      <Link
        href={`/courses/ucat/mock-exams/${exam.id}/take`}
        className="mt-6 flex items-center justify-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-[13px] font-semibold text-white hover:opacity-90"
      >
        Start exam
        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
      </Link>
    </div>
  );
}
