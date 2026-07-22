"use client";

import { useMemo, useState } from "react";
import type { ExamType } from "@/lib/courses";
import { tutors } from "@/lib/tutors";
import EmptyState from "@/components/common/EmptyState";
import TutorFilters from "./TutorFilters";
import TutorCard from "./TutorCard";

export default function TutorBrowser() {
  const [query, setQuery] = useState("");
  const [activeSubjects, setActiveSubjects] = useState<Set<ExamType>>(() => new Set());

  function toggleSubject(subject: ExamType) {
    setActiveSubjects((prev) => {
      const next = new Set(prev);
      if (next.has(subject)) next.delete(subject);
      else next.add(subject);
      return next;
    });
  }

  const filteredTutors = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tutors.filter((tutor) => {
      const matchesQuery =
        q.length === 0 ||
        tutor.name.toLowerCase().includes(q) ||
        tutor.specialty.toLowerCase().includes(q);
      const matchesSubject =
        activeSubjects.size === 0 || tutor.subjects.some((s) => activeSubjects.has(s));
      return matchesQuery && matchesSubject;
    });
  }, [query, activeSubjects]);

  return (
    <section className="mt-9">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-[15px] font-bold text-[#181826]">Browse tutors</h2>
        <TutorFilters
          query={query}
          onQueryChange={setQuery}
          activeSubjects={activeSubjects}
          onToggleSubject={toggleSubject}
        />
      </div>

      {filteredTutors.length === 0 ? (
        <EmptyState message="No tutors match your search. Try a different keyword or subject." />
      ) : (
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTutors.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>
      )}
    </section>
  );
}
