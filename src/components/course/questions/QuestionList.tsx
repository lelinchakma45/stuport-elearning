import type { PracticeQuestion } from "@/lib/practiceQuestions";
import QuestionListRow from "./QuestionListRow";

export default function QuestionList({
  questions,
  topicId,
}: {
  questions: PracticeQuestion[];
  topicId: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm">
      {questions.map((question) => (
        <QuestionListRow key={question.id} question={question} topicId={topicId} />
      ))}
    </div>
  );
}
