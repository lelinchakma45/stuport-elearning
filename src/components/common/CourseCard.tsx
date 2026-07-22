import Link from "next/link";
import { BookOpen, Clock, RotateCw, Users } from "lucide-react";
import type { CourseTheme, FeaturedCourse, ProgressCourse } from "@/lib/courses";
import { themeStyles } from "@/lib/courses";

const COURSE_ROUTES: Record<string, string> = {
  UCAT: "/courses/ucat",
};

function CardTop({
  code,
  theme,
  badge,
}: {
  code: string;
  theme: CourseTheme;
  badge?: string;
}) {
  return (
    <div
      className="diagonal-stripes relative flex h-28 items-center justify-center overflow-hidden"
      style={{ backgroundColor: themeStyles[theme].bg }}
    >
      <span className="select-none text-3xl font-extrabold tracking-wide text-white/95">
        {code}
      </span>
      {badge && (
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-brand">
          {badge}
        </span>
      )}
    </div>
  );
}

export function StatsRow({
  hours,
  lessons,
  enrolled,
  bordered = true,
}: {
  hours: number;
  lessons: number;
  enrolled: number;
  bordered?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3.5 text-[11.5px] text-[#8B8B96] ${
        bordered ? "mt-3 border-t border-black/5 pt-3" : ""
      }`}
    >
      <span className="flex items-center gap-1">
        <Clock className="h-3.5 w-3.5" strokeWidth={1.8} />
        {hours} hours
      </span>
      <span className="flex items-center gap-1">
        <BookOpen className="h-3.5 w-3.5" strokeWidth={1.8} />
        {lessons} lessons
      </span>
      <span className="flex items-center gap-1">
        <Users className="h-3.5 w-3.5" strokeWidth={1.8} />
        {enrolled} Enrolled
      </span>
    </div>
  );
}

export function ProgressCard({ course }: { course: ProgressCourse }) {
  const href = COURSE_ROUTES[course.code];
  const resumeClass =
    "flex items-center gap-1 rounded-full border border-brand/30 px-2.5 py-1 text-[11.5px] font-semibold text-brand hover:bg-brand/5";

  return (
    <div className="w-full shrink-0 overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md">
      <CardTop code={course.code} theme={course.theme} />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] font-bold text-[#181826]">{course.name}</h3>
          {href ? (
            <Link href={href} className={resumeClass}>
              <RotateCw className="h-3 w-3" strokeWidth={2} />
              Resume
            </Link>
          ) : (
            <button className={resumeClass}>
              <RotateCw className="h-3 w-3" strokeWidth={2} />
              Resume
            </button>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between text-[11.5px] text-[#8B8B96]">
          <span>Completed</span>
          <span className="font-semibold text-[#181826]">{course.completed}%</span>
        </div>
        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#ECECF0]">
          <div
            className="h-full rounded-full bg-brand"
            style={{ width: `${course.completed}%` }}
          />
        </div>

        <StatsRow hours={course.hours} lessons={course.lessons} enrolled={course.enrolled} />
      </div>
    </div>
  );
}

export function FeaturedCard({
  course,
  badge = "Free trial",
  caption,
}: {
  course: FeaturedCourse;
  badge?: string;
  caption?: React.ReactNode;
}) {
  return (
    <div
      className={`w-full overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md ${
        course.faded ? "opacity-40" : ""
      }`}
    >
      <CardTop code={course.code} theme={course.theme} badge={badge} />
      <div className="p-4">
        <h3 className="text-[15px] font-bold text-[#181826]">{course.name}</h3>
        <p className="mt-2 text-[13px] text-[#5B5B68]">
          {caption ?? (
            <>
              Starting from -{" "}
              <span className="font-semibold text-[#181826]">{course.price}</span>
            </>
          )}
        </p>
        <StatsRow hours={course.hours} lessons={course.lessons} enrolled={course.enrolled} />
      </div>
    </div>
  );
}
