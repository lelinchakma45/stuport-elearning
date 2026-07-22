import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import type { ExamStatus, MockExam } from "@/lib/mockExams";
import ProgressRing from "../ProgressRing";

const statusConfig: Record<ExamStatus, { label: string; tone: string; action: string }> = {
  "not-started": { label: "Not started", tone: "bg-black/5 text-[#5B5B68]", action: "Start exam" },
  "in-progress": {
    label: "In progress",
    tone: "bg-[#FFF1E6] text-[#F15D09]",
    action: "Continue exam",
  },
  completed: { label: "Completed", tone: "bg-[#E6F7EE] text-[#019D4F]", action: "Review results" },
};

export default function MockExamCard({ exam }: { exam: MockExam }) {
  const config = statusConfig[exam.status];
  const isReview = exam.status === "completed";

  return (
    <div className="flex flex-col rounded-xl border border-black/5 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ECEEFD] text-brand">
            <FileText className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <div>
            <h3 className="text-[14px] font-bold text-[#181826]">{exam.title}</h3>
            <p className="text-[11.5px] text-[#8B8B96]">
              {exam.sections} section{exam.sections > 1 ? "s" : ""} · {exam.questions} questions ·{" "}
              {exam.duration}
            </p>
          </div>
        </div>
        {exam.score !== undefined && <ProgressRing percent={exam.score} size={38} />}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <span className={`rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${config.tone}`}>
          {config.label}
        </span>
        {exam.dateTaken && <span className="text-[11px] text-[#8B8B96]">Taken {exam.dateTaken}</span>}
      </div>

      <Link
        href={`/courses/ucat/mock-exams/${exam.id}`}
        className={`mt-4 flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-[12.5px] font-semibold transition-colors ${
          isReview
            ? "border border-black/10 text-[#4B4B57] hover:border-black/20"
            : "bg-brand text-white hover:opacity-90"
        }`}
      >
        {config.action}
        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
      </Link>
    </div>
  );
}
