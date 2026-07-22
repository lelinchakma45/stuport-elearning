import { FileText } from "lucide-react";
import type { TutorialItem } from "@/lib/tutorial";
import ProgressRing from "./ProgressRing";

export default function TutorialList({
  items,
  activeId,
}: {
  items: TutorialItem[];
  activeId?: string;
}) {
  return (
    <div className="mt-4 flex flex-col gap-2.5">
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <div
            key={item.id}
            className={`flex items-center gap-3 rounded-xl border p-3.5 transition-colors ${
              isActive ? "border-2 border-brand bg-[#ECEEFD]" : "border-black/5 bg-white hover:border-black/10"
            }`}
          >
            <span className={`w-4 shrink-0 text-[13px] font-bold ${isActive ? "text-brand" : "text-[#8B8B96]"}`}>
              {item.number}
            </span>
            <div className="min-w-0 flex-1">
              <p className={`truncate text-[13px] font-semibold ${isActive ? "text-brand" : "text-[#181826]"}`}>
                {item.title}
              </p>
              <p className="text-[11.5px] text-[#8B8B96]">{item.meta}</p>
            </div>
            {item.type === "pdf" ? (
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-black/[0.03] text-[#8B8B96]">
                <FileText className="h-4 w-4" strokeWidth={1.8} />
              </span>
            ) : (
              <ProgressRing percent={item.progress ?? 0} />
            )}
          </div>
        );
      })}
    </div>
  );
}
