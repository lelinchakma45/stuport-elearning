import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseSubHeader from "@/components/course/CourseSubHeader";
import LessonBreadcrumb from "@/components/course/LessonBreadcrumb";
import ExamResultsSummary from "@/components/course/mockexams/ExamResultsSummary";
import ExamSectionBreakdown from "@/components/course/mockexams/ExamSectionBreakdown";
import ExamResultActions from "@/components/course/mockexams/ExamResultActions";
import ExamOverviewCard from "@/components/course/mockexams/ExamOverviewCard";
import { mockExams } from "@/lib/mockExams";
import { examDetails } from "@/lib/examDetails";

export function generateStaticParams() {
  return mockExams.map((exam) => ({ examId: exam.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ examId: string }>;
}): Promise<Metadata> {
  const { examId } = await params;
  const exam = mockExams.find((e) => e.id === examId);
  return { title: exam ? `${exam.title} | Study Mind` : "Mock exam | Study Mind" };
}

export default async function ExamDetailPage({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const { examId } = await params;
  const exam = mockExams.find((e) => e.id === examId);
  const detail = examDetails[examId];

  if (!exam || !detail) {
    notFound();
  }

  const hasResults = exam.status !== "not-started" && detail.sections.length > 0;

  return (
    <>
      <CourseSubHeader
        code="UCAT"
        subtitle="Overview of your UCAT course & questions"
        countdown="3 months"
      />
      <main className="mx-auto w-full max-w-[1440px] flex-1 px-10 py-6">
        <LessonBreadcrumb section="Mock exams" lesson={exam.title} />

        <div className="mt-5 flex flex-col gap-5">
          {hasResults ? (
            <>
              <ExamResultsSummary exam={exam} detail={detail} />
              <ExamSectionBreakdown sections={detail.sections} />
              <ExamResultActions examId={exam.id} status={exam.status} />
            </>
          ) : (
            <ExamOverviewCard exam={exam} instructions={detail.instructions} />
          )}
        </div>
      </main>
    </>
  );
}
