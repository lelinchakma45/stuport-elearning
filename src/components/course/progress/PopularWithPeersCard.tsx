import { ChevronLeft, ChevronRight, Users } from "lucide-react";
import { popularWithPeers } from "@/lib/progress";

export default function PopularWithPeersCard() {
  return (
    <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-[14.5px] font-bold text-[#181826]">Popular with your peers</h3>
        <div className="flex items-center gap-1">
          <button
            aria-label="Previous"
            className="flex h-6 w-6 items-center justify-center rounded-md border border-black/10 text-[#8B8B96] hover:text-[#181826]"
          >
            <ChevronLeft className="h-3.5 w-3.5" strokeWidth={2} />
          </button>
          <button
            aria-label="Next"
            className="flex h-6 w-6 items-center justify-center rounded-md border border-black/10 text-[#8B8B96] hover:text-[#181826]"
          >
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
          </button>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ECEEFD] text-brand">
          <Users className="h-3.5 w-3.5" strokeWidth={2} />
        </span>
        <p className="text-[13px] font-semibold text-[#181826]">{popularWithPeers.title}</p>
      </div>

      <p className="mt-2.5 line-clamp-4 text-[12.5px] leading-relaxed text-[#8B8B96]">
        {popularWithPeers.description}
      </p>
    </div>
  );
}
