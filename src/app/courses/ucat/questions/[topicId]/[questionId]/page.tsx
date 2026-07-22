import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseSubHeader from "@/components/course/CourseSubHeader";
import LessonBreadcrumb from "@/components/course/LessonBreadcrumb";
import QuestionPracticeView from "@/components/course/questions/QuestionPracticeView";
import { questionTopics } from "@/lib/questions";
import { getTopicQuestions } from "@/lib/practiceQuestions";

export function generateStaticParams() {
  return questionTopics.flatMap((topic) =>
    getTopicQuestions(topic).map((question) => ({ topicId: topic.id, questionId: question.id }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topicId: string; questionId: string }>;
}): Promise<Metadata> {
  const { topicId } = await params;
  const topic = questionTopics.find((t) => t.id === topicId);
  return { title: topic ? `${topic.title} practice | Study Mind` : "Practice question | Study Mind" };
}

export default async function QuestionPracticePage({
  params,
}: {
  params: Promise<{ topicId: string; questionId: string }>;
}) {
  const { topicId, questionId } = await params;
  const topic = questionTopics.find((t) => t.id === topicId);

  if (!topic) {
    notFound();
  }

  const questions = getTopicQuestions(topic);
  const question = questions.find((q) => q.id === questionId);

  if (!question) {
    notFound();
  }

  return (
    <>
      <CourseSubHeader
        code="UCAT"
        subtitle="Overview of your UCAT course & questions"
        countdown="3 months"
      />
      <main className="mx-auto w-full max-w-[1440px] flex-1 px-10 py-6">
        <LessonBreadcrumb section={topic.title} lesson={`Question ${question.index}`} />
        <div className="mt-5">
          <QuestionPracticeView
            key={question.id}
            topicId={topic.id}
            topicTitle={topic.title}
            questions={questions}
            currentId={question.id}
          />
        </div>
      </main>
    </>
  );
}
