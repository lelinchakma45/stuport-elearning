import Link from "next/link";
import { RotateCcw } from "lucide-react";
import type { ExamStatus } from "@/lib/mockExams";

export default function ExamResultActions({
  examId,
  status,
}: {
  examId: string;
  status: ExamStatus;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        href={`/courses/ucat/mock-exams/${examId}/take`}
        className="flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-[13px] font-semibold text-white hover:opacity-90"
      >
        <RotateCcw className="h-3.5 w-3.5" strokeWidth={2} />
        {status === "in-progress" ? "Continue exam" : "Retake exam"}
      </Link>
      <button className="rounded-full border border-black/10 px-5 py-2.5 text-[13px] font-semibold text-[#4B4B57] hover:border-black/20">
        Download report
      </button>
    </div>
  );
}
