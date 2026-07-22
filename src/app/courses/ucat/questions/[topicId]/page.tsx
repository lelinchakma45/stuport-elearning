import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import CourseSubHeader from "@/components/course/CourseSubHeader";
import LessonBreadcrumb from "@/components/course/LessonBreadcrumb";
import TopicOverviewSummary from "@/components/course/questions/TopicOverviewSummary";
import QuestionList from "@/components/course/questions/QuestionList";
import { questionTopics } from "@/lib/questions";
import { getTopicQuestions } from "@/lib/practiceQuestions";

export function generateStaticParams() {
  return questionTopics.map((topic) => ({ topicId: topic.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topicId: string }>;
}): Promise<Metadata> {
  const { topicId } = await params;
  const topic = questionTopics.find((t) => t.id === topicId);
  return { title: topic ? `${topic.title} | Study Mind` : "Question topic | Study Mind" };
}

export default async function QuestionTopicPage({
  params,
}: {
  params: Promise<{ topicId: string }>;
}) {
  const { topicId } = await params;
  const topic = questionTopics.find((t) => t.id === topicId);

  if (!topic) {
    notFound();
  }

  const questions = getTopicQuestions(topic);
  const firstQuestion = questions[0];

  return (
    <>
      <CourseSubHeader
        code="UCAT"
        subtitle="Overview of your UCAT course & questions"
        countdown="3 months"
      />
      <main className="mx-auto w-full max-w-[1440px] flex-1 px-10 py-6">
        <LessonBreadcrumb section="Questions" lesson={topic.title} />

        <div className="mt-5 flex flex-col gap-5">
          <TopicOverviewSummary topic={topic} />

          <div className="flex items-center justify-between">
            <h2 className="text-[14.5px] font-bold text-[#181826]">Practice questions</h2>
            <Link
              href={`/courses/ucat/questions/${topic.id}/${firstQuestion.id}`}
              className="flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-[12.5px] font-semibold text-white hover:opacity-90"
            >
              Practice now
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          </div>

          <QuestionList questions={questions} topicId={topic.id} />
        </div>
      </main>
    </>
  );
}
