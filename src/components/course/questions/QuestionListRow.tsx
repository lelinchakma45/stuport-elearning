import Link from "next/link";
import { Bookmark, CheckCircle2, ChevronRight, Circle, XCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { PracticeQuestion } from "@/lib/practiceQuestions";

const statusConfig: Record<PracticeQuestion["status"], { icon: LucideIcon; tone: string; label: string }> = {
  correct: { icon: CheckCircle2, tone: "text-[#019D4F]", label: "Correct" },
  incorrect: { icon: XCircle, tone: "text-[#D2454F]", label: "Incorrect" },
  unattempted: { icon: Circle, tone: "text-[#B5B5BD]", label: "Not attempted" },
};

export default function QuestionListRow({
  question,
  topicId,
}: {
  question: PracticeQuestion;
  topicId: string;
}) {
  const config = statusConfig[question.status];
  const Icon = config.icon;

  return (
    <Link
      href={`/courses/ucat/questions/${topicId}/${question.id}`}
      className="flex items-center gap-3 border-b border-black/5 px-4 py-3.5 last:border-b-0 hover:bg-black/[0.015]"
    >
      <Icon className={`h-4.5 w-4.5 shrink-0 ${config.tone}`} strokeWidth={1.8} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-medium text-[#181826]">Question {question.index}</p>
        <p className="truncate text-[11.5px] text-[#8B8B96]">{config.label}</p>
      </div>
      {question.bookmarked && (
        <Bookmark className="h-3.5 w-3.5 shrink-0 text-brand" strokeWidth={1.8} fill="currentColor" />
      )}
      <ChevronRight className="h-4 w-4 shrink-0 text-[#B5B5BD]" strokeWidth={1.8} />
    </Link>
  );
}
