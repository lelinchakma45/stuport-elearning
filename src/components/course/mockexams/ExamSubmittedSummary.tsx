import Link from "next/link";
import { CheckCircle2, Clock, XCircle } from "lucide-react";
import type { MockExam } from "@/lib/mockExams";
import type { ExamBlueprint } from "@/lib/examSession";
import ProgressRing from "../ProgressRing";

function formatDuration(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = Math.floor(totalSeconds % 60);
  return `${m}m ${s.toString().padStart(2, "0")}s`;
}

export default function ExamSubmittedSummary({
  exam,
  blueprint,
  answers,
  timeUsedSeconds,
}: {
  exam: MockExam;
  blueprint: ExamBlueprint;
  answers: Record<string, number>;
  timeUsedSeconds: number;
}) {
  const bySection = new Map<string, { correct: number; total: number }>();
  for (const q of blueprint.questions) {
    const entry = bySection.get(q.section) ?? { correct: 0, total: 0 };
    entry.total += 1;
    if (answers[q.id] === q.correctIndex) entry.correct += 1;
    bySection.set(q.section, entry);
  }

  const totalCorrect = [...bySection.values()].reduce((sum, r) => sum + r.correct, 0);
  const totalQuestions = blueprint.questions.length;
  const scorePct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F9F9F9] px-6 py-12">
      <div className="w-full max-w-lg rounded-xl border border-black/5 bg-white p-6 text-center shadow-sm">
        <p className="text-[13px] font-semibold text-[#8B8B96]">{exam.title}</p>
        <h1 className="mt-1 text-[18px] font-bold text-[#181826]">Exam submitted</h1>

        <div className="mt-5 flex justify-center">
          <ProgressRing percent={scorePct} size={110} stroke={9} />
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 text-left">
          <div className="rounded-lg border border-black/5 p-3">
            <CheckCircle2 className="h-4 w-4 text-[#019D4F]" strokeWidth={2} />
            <p className="mt-1.5 text-[15px] font-bold text-[#181826]">{totalCorrect}</p>
            <p className="text-[10.5px] text-[#8B8B96]">Correct</p>
          </div>
          <div className="rounded-lg border border-black/5 p-3">
            <XCircle className="h-4 w-4 text-[#D2454F]" strokeWidth={2} />
            <p className="mt-1.5 text-[15px] font-bold text-[#181826]">{totalQuestions - totalCorrect}</p>
            <p className="text-[10.5px] text-[#8B8B96]">Incorrect</p>
          </div>
          <div className="rounded-lg border border-black/5 p-3">
            <Clock className="h-4 w-4 text-brand" strokeWidth={2} />
            <p className="mt-1.5 text-[15px] font-bold text-[#181826]">
              {formatDuration(timeUsedSeconds)}
            </p>
            <p className="text-[10.5px] text-[#8B8B96]">Time used</p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 text-left">
          {[...bySection.entries()].map(([name, r]) => (
            <div
              key={name}
              className="flex items-center justify-between rounded-lg border border-black/5 px-3.5 py-2.5 text-[12.5px]"
            >
              <span className="font-medium text-[#181826]">{name}</span>
              <span className="text-[#8B8B96]">
                {r.correct}/{r.total} correct
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
          <Link
            href={`/courses/ucat/mock-exams/${exam.id}`}
            className="flex flex-1 items-center justify-center rounded-full border border-black/10 px-4 py-2.5 text-[13px] font-semibold text-[#4B4B57] hover:border-black/20"
          >
            View exam details
          </Link>
          <Link
            href="/courses/ucat"
            className="flex flex-1 items-center justify-center rounded-full bg-brand px-4 py-2.5 text-[13px] font-semibold text-white hover:opacity-90"
          >
            Back to Mock exams
          </Link>
        </div>

        <p className="mt-4 text-[11px] text-[#B5B5BD]">
          This is a practice session with placeholder questions — your score here is illustrative
          and isn&apos;t saved.
        </p>
      </div>
    </div>
  );
}
