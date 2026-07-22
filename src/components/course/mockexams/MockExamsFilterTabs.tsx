import type { ExamStatus } from "@/lib/mockExams";
import { statusFilters } from "@/lib/mockExams";

export default function MockExamsFilterTabs({
  active,
  onChange,
}: {
  active: "all" | ExamStatus;
  onChange: (id: "all" | ExamStatus) => void;
}) {
  return (
    <div className="flex items-center gap-1 rounded-lg bg-[#F3F3F6] p-1">
      {statusFilters.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={`rounded-md px-3 py-1.5 text-[12.5px] font-semibold transition-colors ${
            active === id ? "bg-brand text-white" : "text-[#5B5B68] hover:text-[#181826]"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
