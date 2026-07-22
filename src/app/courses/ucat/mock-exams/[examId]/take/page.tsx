import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { mockExams } from "@/lib/mockExams";
import { examSectionNames, getExamBlueprint } from "@/lib/examSession";
import ExamRunner from "@/components/course/mockexams/ExamRunner";

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
  return { title: exam ? `${exam.title} — In progress | Study Mind` : "Mock exam | Study Mind" };
}

export default async function TakeExamPage({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const { examId } = await params;
  const exam = mockExams.find((e) => e.id === examId);
  const sectionNames = examSectionNames[examId];

  if (!exam || !sectionNames) {
    notFound();
  }

  const blueprint = getExamBlueprint(sectionNames);

  return <ExamRunner exam={exam} blueprint={blueprint} />;
}
