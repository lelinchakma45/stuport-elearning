"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Bookmark, CheckCircle2, XCircle } from "lucide-react";
import type { PracticeQuestion } from "@/lib/practiceQuestions";

export default function QuestionPracticeView({
  topicId,
  topicTitle,
  questions,
  currentId,
}: {
  topicId: string;
  topicTitle: string;
  questions: PracticeQuestion[];
  currentId: string;
}) {
  const router = useRouter();
  const index = questions.findIndex((q) => q.id === currentId);
  const question = questions[index];

  const [selected, setSelected] = useState<number | null>(question.yourAnswerIndex ?? null);
  const [revealed, setRevealed] = useState(question.status !== "unattempted");
  const [bookmarked, setBookmarked] = useState(question.bookmarked);

  const isFirst = index === 0;
  const isLast = index === questions.length - 1;
  const isCorrect = revealed && selected === question.correctIndex;

  function goTo(newIndex: number) {
    const target = questions[newIndex];
    if (target) router.push(`/courses/ucat/questions/${topicId}/${target.id}`);
  }

  function selectOption(i: number) {
    if (revealed) return;
    setSelected(i);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="no-scrollbar flex gap-1.5 overflow-x-auto pb-1">
        {questions.map((q, i) => (
          <Link
            key={q.id}
            href={`/courses/ucat/questions/${topicId}/${q.id}`}
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border text-[11.5px] font-semibold ${
              i === index
                ? "border-brand bg-brand text-white"
                : q.status !== "unattempted"
                  ? "border-brand/30 bg-[#ECEEFD] text-brand"
                  : "border-black/10 bg-white text-[#8B8B96]"
            }`}
          >
            {i + 1}
          </Link>
        ))}
      </div>

      <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <span className="rounded-full bg-[#ECEEFD] px-2.5 py-1 text-[11px] font-semibold text-brand">
            {topicTitle} · Question {question.index}
          </span>
          <button
            onClick={() => setBookmarked((b) => !b)}
            className={`flex items-center gap-1.5 text-[12.5px] font-medium ${
              bookmarked ? "text-brand" : "text-[#8B8B96] hover:text-[#181826]"
            }`}
          >
            <Bookmark className="h-4 w-4" strokeWidth={1.8} fill={bookmarked ? "currentColor" : "none"} />
            {bookmarked ? "Bookmarked" : "Bookmark"}
          </button>
        </div>

        <p className="mt-4 text-[15px] leading-relaxed text-[#181826]">{question.stem}</p>

        <div className="mt-5 flex flex-col gap-2.5">
          {question.options.map((opt, i) => {
            const isSelected = selected === i;
            const isCorrectOption = i === question.correctIndex;

            let stateClasses = "border-black/10 text-[#4B4B57] hover:border-black/20";
            let badgeClasses = "border-black/20 text-[#8B8B96]";
            if (revealed && isCorrectOption) {
              stateClasses = "border-[#019D4F] bg-[#E6F7EE] text-[#181826]";
              badgeClasses = "border-[#019D4F] bg-[#019D4F] text-white";
            } else if (revealed && isSelected) {
              stateClasses = "border-[#D2454F] bg-[#FDEAEA] text-[#181826]";
              badgeClasses = "border-[#D2454F] bg-[#D2454F] text-white";
            } else if (!revealed && isSelected) {
              stateClasses = "border-brand bg-[#ECEEFD] text-[#181826]";
              badgeClasses = "border-brand bg-brand text-white";
            }

            return (
              <button
                key={i}
                onClick={() => selectOption(i)}
                disabled={revealed}
                className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-[13.5px] transition-colors ${stateClasses}`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold ${badgeClasses}`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
                {revealed && isCorrectOption && (
                  <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-[#019D4F]" strokeWidth={2} />
                )}
                {revealed && isSelected && !isCorrectOption && (
                  <XCircle className="ml-auto h-4 w-4 shrink-0 text-[#D2454F]" strokeWidth={2} />
                )}
              </button>
            );
          })}
        </div>

        {!revealed ? (
          <button
            onClick={() => selected !== null && setRevealed(true)}
            disabled={selected === null}
            className="mt-5 flex items-center justify-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-[13px] font-semibold text-white hover:opacity-90 disabled:opacity-40"
          >
            Check answer
          </button>
        ) : (
          <div
            className={`mt-5 rounded-lg border p-4 ${
              isCorrect ? "border-[#019D4F]/30 bg-[#E6F7EE]" : "border-[#D2454F]/30 bg-[#FDEAEA]"
            }`}
          >
            <p className={`text-[13px] font-bold ${isCorrect ? "text-[#019D4F]" : "text-[#D2454F]"}`}>
              {isCorrect ? "Correct!" : "Not quite"}
            </p>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#5B5B68]">{question.explanation}</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-3">
        <button
          disabled={isFirst}
          onClick={() => goTo(index - 1)}
          className="flex items-center gap-1.5 rounded-full border border-black/10 px-4 py-2 text-[13px] font-semibold text-[#4B4B57] hover:border-black/20 disabled:opacity-40"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
          Previous
        </button>

        <Link
          href={`/courses/ucat/questions/${topicId}`}
          className="text-[12.5px] font-medium text-[#8B8B96] hover:text-[#181826]"
        >
          Back to topic
        </Link>

        <button
          disabled={isLast}
          onClick={() => goTo(index + 1)}
          className="flex items-center gap-1.5 rounded-full bg-brand px-5 py-2 text-[13px] font-semibold text-white hover:opacity-90 disabled:opacity-40"
        >
          Next
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
