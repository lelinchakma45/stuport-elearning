import Link from "next/link";
import { ArrowRight, BookOpenCheck } from "lucide-react";
import type { Difficulty, QuestionTopic } from "@/lib/questions";

const difficultyTone: Record<Difficulty, string> = {
  Easy: "bg-[#E6F7EE] text-[#019D4F]",
  Medium: "bg-[#FFF1E6] text-[#F15D09]",
  Hard: "bg-[#FDEAEA] text-[#D2454F]",
  Mixed: "bg-[#ECEEFD] text-brand",
};

export default function QuestionTopicCard({ topic }: { topic: QuestionTopic }) {
  const answeredPct = Math.round((topic.answered / topic.totalQuestions) * 100);

  return (
    <div className="flex flex-col rounded-xl border border-black/5 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ECEEFD] text-brand">
            <BookOpenCheck className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <div>
            <h3 className="text-[14px] font-bold text-[#181826]">{topic.title}</h3>
            <p className="text-[11.5px] text-[#8B8B96]">
              {topic.totalQuestions} questions · {topic.avgTime}
            </p>
          </div>
        </div>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${difficultyTone[topic.difficulty]}`}
        >
          {topic.difficulty}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between text-[11.5px] text-[#8B8B96]">
        <span>
          {topic.answered}/{topic.totalQuestions} answered
        </span>
        <span className="font-semibold text-[#181826]">{topic.accuracy}% accuracy</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#ECECF0]">
        <div className="h-full rounded-full bg-brand" style={{ width: `${answeredPct}%` }} />
      </div>

      <Link
        href={`/courses/ucat/questions/${topic.id}`}
        className="mt-4 flex items-center justify-center gap-1.5 rounded-full bg-brand px-4 py-2 text-[12.5px] font-semibold text-white hover:opacity-90"
      >
        Practice now
        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
      </Link>
    </div>
  );
}
