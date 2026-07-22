import { Award, BookOpen, Clock, Flame } from "lucide-react";

const stats = [
  {
    label: "Study streak",
    value: "7 days",
    icon: Flame,
    tint: "#FFF1E6",
    color: "#DA3600",
  },
  {
    label: "Hours studied",
    value: "128 hrs",
    icon: Clock,
    tint: "#EDEBFF",
    color: "#4433C9",
  },
  {
    label: "Courses in progress",
    value: "3",
    icon: BookOpen,
    tint: "#E6F7EE",
    color: "#019D4F",
  },
  {
    label: "Certificates earned",
    value: "2",
    icon: Award,
    tint: "#FFF6DA",
    color: "#B98900",
  },
];

export default function StatsOverview() {
  return (
    <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
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
