import { Clock, ListChecks, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Difficulty, QuestionTopic } from "@/lib/questions";

const difficultyTone: Record<Difficulty, string> = {
  Easy: "bg-[#E6F7EE] text-[#019D4F]",
  Medium: "bg-[#FFF1E6] text-[#F15D09]",
  Hard: "bg-[#FDEAEA] text-[#D2454F]",
  Mixed: "bg-[#ECEEFD] text-brand",
};

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
    <div className="flex items-center gap-3 rounded-lg border border-black/5 p-3">
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: tint }}
      >
        <Icon className="h-4.5 w-4.5" strokeWidth={2} style={{ color }} />
      </span>
      <div>
        <p className="text-[14px] font-bold text-[#181826]">{value}</p>
        <p className="text-[11px] text-[#8B8B96]">{label}</p>
      </div>
    </div>
  );
}

export default function TopicOverviewSummary({ topic }: { topic: QuestionTopic }) {
  return (
    <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-[16px] font-bold text-[#181826]">{topic.title}</h1>
          <p className="mt-1 text-[12.5px] text-[#8B8B96]">
            {topic.totalQuestions} questions · {topic.avgTime}
          </p>
        </div>
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${difficultyTone[topic.difficulty]}`}
        >
          {topic.difficulty}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <Stat
          icon={ListChecks}
          tint="#ECEEFD"
          color="#4433C9"
          label="Answered"
          value={`${topic.answered}/${topic.totalQuestions}`}
        />
        <Stat icon={Target} tint="#E6F7EE" color="#019D4F" label="Accuracy" value={`${topic.accuracy}%`} />
        <Stat icon={Clock} tint="#FFF1E6" color="#F15D09" label="Avg time" value={topic.avgTime} />
      </div>
    </div>
  );
}
