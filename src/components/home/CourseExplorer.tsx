"use client";

import { useMemo, useState } from "react";
import type { ExamType } from "@/lib/courses";
import { featuredCourses, progressCourses, recommendedCourses } from "@/lib/courses";
import CourseControlsBar from "./CourseControlsBar";
import ProgressSection from "./ProgressSection";
import FeaturedSection from "./FeaturedSection";
import RecommendedSection from "./RecommendedSection";

export default function CourseExplorer() {
  const [query, setQuery] = useState("");
  const [activeTypes, setActiveTypes] = useState<Set<ExamType>>(
    () => new Set<ExamType>(["UCAT", "GAMSAT"])
  );

  function toggleType(type: ExamType) {
    setActiveTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
  }

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    return <T extends { name: string; code: string; examType: ExamType }>(course: T) => {
      const inTypes = activeTypes.size === 0 || activeTypes.has(course.examType);
      const inQuery =
        q.length === 0 ||
        course.name.toLowerCase().includes(q) ||
        course.code.toLowerCase().includes(q);
      return inTypes && inQuery;
    };
  }, [query, activeTypes]);

  const filteredProgress = useMemo(
    () => progressCourses.filter(matches),
    [matches]
  );
  const filteredFeatured = useMemo(
    () => featuredCourses.filter(matches),
    [matches]
  );
  const filteredRecommended = useMemo(
    () => recommendedCourses.filter(matches),
    [matches]
  );

  return (
    <>
      <ProgressSection
        courses={filteredProgress}
        controls={
          <CourseControlsBar
            query={query}
            onQueryChange={setQuery}
            activeTypes={activeTypes}
            onToggleType={toggleType}
            onClearTypes={() => setActiveTypes(new Set())}
          />
        }
      />
      <FeaturedSection courses={filteredFeatured} />
      <RecommendedSection courses={filteredRecommended} />
    </>
  );
}
