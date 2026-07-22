import { BookOpen, FileText, HelpCircle, Sparkles } from "lucide-react";

const tabs = [
  { id: "progress", label: "My progress", icon: Sparkles },
  { id: "tutorials", label: "Tutorials", icon: BookOpen },
  { id: "questions", label: "Questions", icon: HelpCircle },
  { id: "mockexams", label: "Mock exams", icon: FileText },
] as const;

export type CourseTabId = (typeof tabs)[number]["id"];

export default function CourseTabNav({
  active,
  onChange,
}: {
  active: CourseTabId;
  onChange: (id: CourseTabId) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map(({ id, label, icon: Icon }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-[13px] font-medium transition-colors ${
              isActive
                ? "border-brand/30 bg-[#ECEEFD] text-brand"
                : "border-black/10 bg-white text-[#4B4B57] hover:border-black/20"
            }`}
          >
            <Icon className="h-4 w-4" strokeWidth={1.8} />
            {label}
          </button>
        );
      })}
    </div>
  );
}
