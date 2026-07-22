import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredCourses } from "@/lib/courses";
import { FeaturedCard } from "@/components/common/CourseCard";

export default function CoursesPreview() {
  const preview = featuredCourses.filter((course) => !course.faded).slice(0, 3);

  return (
    <section id="courses" className="scroll-mt-6 py-14">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-[24px] font-bold text-[#181826]">Explore our courses</h2>
          <p className="mt-1.5 text-[13.5px] text-[#8B8B96]">
            Medicine, Dentistry, Veterinary — sign up to unlock full access.
          </p>
        </div>
        <Link
          href="/login"
          className="flex items-center gap-1.5 text-[13.5px] font-semibold text-brand hover:underline"
        >
          View all courses
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {preview.map((course, i) => (
          <FeaturedCard key={`${course.code}-${i}`} course={course} />
        ))}
      </div>
    </section>
  );
}
