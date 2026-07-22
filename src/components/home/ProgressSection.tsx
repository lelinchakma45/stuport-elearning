import type { ReactNode } from "react";
import type { ProgressCourse } from "@/lib/courses";
import { ProgressCard } from "@/components/common/CourseCard";
import EmptyState from "@/components/common/EmptyState";

export default function ProgressSection({
  courses,
  controls,
}: {
  courses: ProgressCourse[];
  controls?: ReactNode;
}) {
  return (
    <section className="mt-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-[15px] font-bold text-[#181826]">Your progress</h2>
        {controls}
      </div>

      {courses.length === 0 ? (
        <EmptyState message="No courses match your search. Try a different keyword or clear filters." />
      ) : (
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, i) => (
            <ProgressCard key={`${course.code}-${i}`} course={course} />
          ))}
        </div>
      )}
    </section>
  );
}
