import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import CourseCardStack from "@/components/auth/CourseCardStack";

export default function MarketingHero() {
  return (
    <section className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-10 py-14 lg:grid-cols-2 lg:py-20">
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECEEFD] px-3 py-1 text-[12px] font-semibold text-brand">
          Trusted by 50,000+ students
        </span>
        <h1 className="mt-4 max-w-lg text-[32px] font-extrabold leading-tight text-[#181826] sm:text-[40px]">
          Get into Medicine, Dentistry &amp; Vet school with confidence
        </h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#5B5B68]">
          Structured UCAT, GAMSAT &amp; BMAT courses, 1:1 expert tutoring, and thousands of
          practice questions — all in one place.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link
            href="/login"
            className="flex items-center gap-1.5 rounded-full bg-brand px-6 py-3 text-[14px] font-semibold text-white hover:opacity-90"
          >
            Get started free
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
          <a
            href="#courses"
            className="flex items-center gap-1.5 rounded-full border border-black/10 px-6 py-3 text-[14px] font-semibold text-[#181826] hover:border-black/20"
          >
            <PlayCircle className="h-4 w-4" strokeWidth={1.8} />
            Browse courses
          </a>
        </div>
      </div>

      <div
        className="relative overflow-hidden rounded-3xl px-6 py-10"
        style={{ background: "linear-gradient(135deg, #6D5CF5 0%, #4F3FD1 100%)" }}
      >
        <CourseCardStack />
      </div>
    </section>
  );
}
