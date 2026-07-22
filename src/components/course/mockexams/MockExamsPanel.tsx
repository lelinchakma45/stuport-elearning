"use client";

import { useMemo, useState } from "react";
import type { ExamStatus } from "@/lib/mockExams";
import { mockExams } from "@/lib/mockExams";
import EmptyState from "@/components/common/EmptyState";
import MockExamsStatsRow from "./MockExamsStatsRow";
import MockExamsFilterTabs from "./MockExamsFilterTabs";
import MockExamCard from "./MockExamCard";

export default function MockExamsPanel() {
  const [activeFilter, setActiveFilter] = useState<"all" | ExamStatus>("all");

  const filteredExams = useMemo(() => {
    if (activeFilter === "all") return mockExams;
    return mockExams.filter((exam) => exam.status === activeFilter);
  }, [activeFilter]);

  return (
    <div className="mt-5">
      <MockExamsStatsRow />

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-[15px] font-bold text-[#181826]">Mock exams</h2>
        <MockExamsFilterTabs active={activeFilter} onChange={setActiveFilter} />
      </div>

      {filteredExams.length === 0 ? (
        <EmptyState message="No mock exams in this category yet." />
      ) : (
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredExams.map((exam) => (
            <MockExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      )}
    </div>
  );
}
