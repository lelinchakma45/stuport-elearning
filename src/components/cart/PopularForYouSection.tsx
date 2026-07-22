import { recommendedCourses } from "@/lib/courses";
import { FeaturedCard } from "@/components/common/CourseCard";
import InfoLink from "./InfoLink";

export default function PopularForYouSection() {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-[15px] font-bold text-[#181826]">Popular for you</h2>
        <InfoLink />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {recommendedCourses.map((course, i) => (
          <FeaturedCard
            key={`${course.code}-${i}`}
            course={course}
            badge="For you"
            caption={course.reason}
          />
        ))}
      </div>
    </section>
  );
}
