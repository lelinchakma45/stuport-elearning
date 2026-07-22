"use client";

import { useEffect, useRef, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import type { Difficulty } from "@/lib/questions";
import { difficulties } from "@/lib/questions";

export default function QuestionsControlsBar({
  query,
  onQueryChange,
  activeDifficulties,
  onToggleDifficulty,
  onClearDifficulties,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  activeDifficulties: Set<Difficulty>;
  onToggleDifficulty: (difficulty: Difficulty) => void;
  onClearDifficulties: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <div className="flex w-64 items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 focus-within:border-brand/40">
        <Search className="h-4 w-4 shrink-0 text-[#9A9AA5]" strokeWidth={1.8} />
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search question topics"
          className="w-full bg-transparent text-[13px] text-[#181826] placeholder:text-[#9A9AA5] focus:outline-none"
        />
        {query && (
          <button
            aria-label="Clear search"
            onClick={() => onQueryChange("")}
            className="text-[#9A9AA5] hover:text-[#181826]"
          >
            <X className="h-3.5 w-3.5" strokeWidth={2} />
          </button>
        )}
      </div>

      <div className="relative" ref={ref}>
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 text-[13px] font-medium text-[#181826] hover:border-brand/30"
        >
          <SlidersHorizontal className="h-4 w-4" strokeWidth={1.8} />
          Difficulty
          {activeDifficulties.size > 0 && (
            <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#4A408E] px-1 text-[10px] font-bold text-white">
              {activeDifficulties.size}
            </span>
          )}
        </button>

        {open && (
          <div className="absolute right-0 top-[calc(100%+6px)] z-20 w-48 rounded-lg border border-black/10 bg-white p-3 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-semibold text-[#181826]">Difficulty</span>
              {activeDifficulties.size > 0 && (
                <button
                  onClick={onClearDifficulties}
                  className="text-[11px] font-medium text-brand hover:underline"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="mt-2 flex flex-col gap-1.5">
              {difficulties.map((d) => (
                <label
                  key={d}
                  className="flex cursor-pointer items-center gap-2 rounded-md px-1.5 py-1 text-[13px] text-[#181826] hover:bg-black/[0.03]"
                >
                  <input
                    type="checkbox"
                    checked={activeDifficulties.has(d)}
                    onChange={() => onToggleDifficulty(d)}
                    className="h-3.5 w-3.5 rounded border-black/20 accent-[#4433C9]"
                  />
                  {d}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
