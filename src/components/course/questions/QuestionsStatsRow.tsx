import { Bookmark, CheckCircle2, Layers, Target } from "lucide-react";
import { questionStats } from "@/lib/questions";

const stats = [
  {
    label: "Total questions",
    value: questionStats.total.toLocaleString(),
    icon: Layers,
    tint: "#ECEEFD",
    color: "#4433C9",
  },
  {
    label: "Answered",
    value: questionStats.answered.toLocaleString(),
    icon: CheckCircle2,
    tint: "#E6F7EE",
    color: "#019D4F",
  },
  {
    label: "Accuracy",
    value: `${questionStats.accuracy}%`,
    icon: Target,
    tint: "#FFF1E6",
    color: "#F15D09",
  },
  {
    label: "Bookmarked",
    value: String(questionStats.bookmarked),
    icon: Bookmark,
    tint: "#FFF6DA",
    color: "#B98900",
  },
];

export default function QuestionsStatsRow() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map(({ label, value, icon: Icon, tint, color }) => (
        <div
          key={label}
          className="flex items-center gap-3 rounded-xl border border-black/5 bg-white p-4 shadow-sm"
        >
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
            style={{ backgroundColor: tint }}
          >
            <Icon className="h-5 w-5" strokeWidth={2} style={{ color }} />
          </span>
          <div>
            <p className="text-[17px] font-bold leading-tight text-[#181826]">{value}</p>
            <p className="text-[12px] text-[#8B8B96]">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
