"use client";

import { useState } from "react";
import { Star, Zap } from "lucide-react";
import { liveDayOptions, defaultSelectedLiveDays } from "@/lib/cart";
import InfoLink from "./InfoLink";

const badgeTone = {
  purple: "bg-[#EDEAFF] text-brand",
  orange: "bg-[#FFF1E6] text-[#F15D09]",
};

export default function LiveDaysSection() {
  const [selected, setSelected] = useState<Set<string>>(
    () => new Set(defaultSelectedLiveDays)
  );

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-[15px] font-bold text-[#181826]">Want to add live days?</h2>
        <InfoLink />
      </div>

      <div className="mt-3 flex items-start gap-2.5 rounded-lg border border-[#F2DFB8] bg-[#FDF6EC] px-4 py-2.5">
        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#F0A73C] text-[10px] text-white">
          %
        </span>
        <p className="text-[12.5px] text-[#7A5A22]">
          You can avail &ldquo;10% off&rdquo; by selecting any 2 live days below
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {liveDayOptions.map((option) => {
          const isSelected = selected.has(option.id);
          const BadgeIcon = option.badge?.icon === "star" ? Star : Zap;
          return (
            <button
              key={option.id}
              onClick={() => toggle(option.id)}
              className={`rounded-xl border bg-white p-4 text-left transition-colors ${
                isSelected ? "border-2 border-brand" : "border-black/5 hover:border-black/10"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-[13.5px] font-bold text-[#181826]">{option.name}</h3>
                  {option.badge && (
                    <span
                      className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${
                        badgeTone[option.badge.tone]
                      }`}
                    >
                      <BadgeIcon className="h-2.5 w-2.5" strokeWidth={2} fill="currentColor" />
                      {option.badge.label}
                    </span>
                  )}
                </div>
                <span className="shrink-0 text-[13.5px] font-bold text-[#181826]">
                  £{option.price.toFixed(2)}
                </span>
              </div>
              <p className="mt-1.5 line-clamp-2 text-[12.5px] text-[#8B8B96]">
                {option.description}
              </p>
            </button>
          );
        })}
      </div>

      <div className="mt-3 text-right">
        <button className="text-[12.5px] font-medium text-[#8B8B96] hover:text-[#181826]">
          Skip live days
        </button>
      </div>
    </section>
  );
}
