import type { RecommendedCourse } from "@/lib/courses";
import { FeaturedCard } from "@/components/common/CourseCard";
import EmptyState from "@/components/common/EmptyState";

export default function RecommendedSection({ courses }: { courses: RecommendedCourse[] }) {
  return (
    <section className="mt-9">
      <div className="flex items-baseline gap-2">
        <h2 className="text-[15px] font-bold text-[#181826]">Recommended for you</h2>
        <span className="text-[13px] text-[#9A9AA5]">| Based on your recent activity</span>
      </div>

      {courses.length === 0 ? (
        <EmptyState message="No recommendations match your search." />
      ) : (
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <FeaturedCard
              key={`${course.code}-${i}`}
              course={course}
              badge="For you"
              caption={course.reason}
            />
          ))}
        </div>
      )}
    </section>
  );
}
