import type { Metadata } from "next";
import CourseSubHeader from "@/components/course/CourseSubHeader";
import CourseWorkspace from "@/components/course/CourseWorkspace";

export const metadata: Metadata = {
  title: "UCAT | Study Mind",
};

export default function UcatCoursePage() {
  return (
    <>
      <CourseSubHeader
        code="UCAT"
        subtitle="Overview of your UCAT course & questions"
        countdown="3 months"
      />
      <main className="mx-auto w-full max-w-[1440px] flex-1 px-10 py-6">
        <CourseWorkspace />
      </main>
    </>
  );
}
