import { ChevronRight } from "lucide-react";

export default function LessonBreadcrumb({
  section,
  lesson,
}: {
  section: string;
  lesson: string;
}) {
  return (
    <p className="flex items-center gap-1.5 text-[13px] text-[#8B8B96]">
      {section}
      <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.8} />
      <span className="font-medium text-[#181826]">{lesson}</span>
    </p>
  );
}
