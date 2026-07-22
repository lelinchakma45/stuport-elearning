"use client";

import { useState } from "react";
import { ChevronRight, Percent, Target } from "lucide-react";
import { performanceStats, skillScores } from "@/lib/progress";
import SkillBar from "./SkillBar";

const subTabs = ["Tutorials", "Questions", "Mock exams"] as const;

export default function QuestionPerformanceCard() {
  const [activeSubTab, setActiveSubTab] = useState<(typeof subTabs)[number]>("Tutorials");

  return (
    <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-[14.5px] font-bold text-[#181826]">Question performance</h3>
        <a href="#" className="flex items-center gap-1 text-[12px] font-medium text-brand hover:underline">
          View all
          <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
        </a>
      </div>

      <div className="mt-3 flex items-center gap-1 rounded-lg bg-[#F3F3F6] p-1">
        {subTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab)}
            className={`flex-1 rounded-md px-2 py-1.5 text-[12.5px] font-semibold transition-colors ${
              activeSubTab === tab ? "bg-brand text-white" : "text-[#5B5B68] hover:text-[#181826]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-black/5 p-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#ECEEFD] text-brand">
            <Target className="h-3.5 w-3.5" strokeWidth={2} />
          </span>
          <p className="mt-2 text-[11.5px] text-[#8B8B96]">Your Average Score</p>
          <p className="text-[19px] font-extrabold text-[#181826]">{performanceStats.averageScore}%</p>
        </div>
        <div className="rounded-lg border border-black/5 p-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#ECEEFD] text-brand">
            <Percent className="h-3.5 w-3.5" strokeWidth={2} />
          </span>
          <p className="mt-2 text-[11.5px] text-[#8B8B96]">Your Percentile</p>
          <p className="text-[19px] font-extrabold text-[#181826]">{performanceStats.percentile}%</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4 text-[11.5px] text-[#8B8B96]">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-brand" />
          Your Score
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#F0A73C]" />
          MM Students Average Score
        </span>
      </div>

      <div className="mt-3 flex flex-col gap-3.5">
        {skillScores.map((skill) => (
          <SkillBar key={skill.label} {...skill} />
        ))}
      </div>
    </div>
  );
}
