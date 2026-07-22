import { CheckCircle2, Clock, Target, XCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { MockExam } from "@/lib/mockExams";
import type { ExamDetail } from "@/lib/examDetails";
import ProgressRing from "../ProgressRing";

function Stat({
  icon: Icon,
  tint,
  color,
  label,
  value,
}: {
  icon: LucideIcon;
  tint: string;
  color: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: tint }}
      >
        <Icon className="h-4.5 w-4.5" strokeWidth={2} style={{ color }} />
      </span>
      <div>
        <p className="text-[15px] font-bold text-[#181826]">{value}</p>
        <p className="text-[11px] text-[#8B8B96]">{label}</p>
      </div>
    </div>
  );
}

export default function ExamResultsSummary({
  exam,
  detail,
}: {
  exam: MockExam;
  detail: ExamDetail;
}) {
  const correctTotal = detail.sections.reduce((sum, section) => sum + section.correct, 0);
  const questionsTotal = detail.sections.reduce((sum, section) => sum + section.total, 0);
  const incorrectTotal = questionsTotal - correctTotal;

  return (
    <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <ProgressRing percent={exam.score ?? 0} size={96} stroke={8} />
          <span className="text-[12px] font-medium text-[#8B8B96]">Overall score</span>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat icon={CheckCircle2} tint="#E6F7EE" color="#019D4F" label="Correct" value={String(correctTotal)} />
          <Stat icon={XCircle} tint="#FDEAEA" color="#D2454F" label="Incorrect" value={String(incorrectTotal)} />
          <Stat
            icon={Target}
            tint="#ECEEFD"
            color="#4433C9"
            label="Percentile"
            value={detail.percentile ? `${detail.percentile}th` : "—"}
          />
          <Stat
            icon={Clock}
            tint="#FFF1E6"
            color="#F15D09"
            label="Time taken"
            value={detail.timeTaken ?? "—"}
          />
        </div>
      </div>
    </div>
  );
}
