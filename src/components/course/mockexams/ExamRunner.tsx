"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Flag, X } from "lucide-react";
import type { MockExam } from "@/lib/mockExams";
import type { ExamBlueprint } from "@/lib/examSession";
import ExamSubmittedSummary from "./ExamSubmittedSummary";

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(totalSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

export default function ExamRunner({
  exam,
  blueprint,
}: {
  exam: MockExam;
  blueprint: ExamBlueprint;
}) {
  const { questions, durationSeconds } = blueprint;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState(durationSeconds);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) return;
    const timer = setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          clearInterval(timer);
          setSubmitted(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [submitted]);

  if (submitted) {
    return (
      <ExamSubmittedSummary
        exam={exam}
        blueprint={blueprint}
        answers={answers}
        timeUsedSeconds={durationSeconds - timeLeft}
      />
    );
  }

  const question = questions[index];
  const answeredCount = Object.keys(answers).length;
  const isFlagged = flagged.has(question.id);
  const isLast = index === questions.length - 1;

  function selectOption(optionIndex: number) {
    setAnswers((prev) => ({ ...prev, [question.id]: optionIndex }));
  }

  function toggleFlag() {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(question.id)) next.delete(question.id);
      else next.add(question.id);
      return next;
    });
  }

  function handleSubmit() {
    if (window.confirm("Submit this exam? You won't be able to change your answers after submitting.")) {
      setSubmitted(true);
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F9F9F9]">
      <div className="border-b border-black/5 bg-white px-6 py-3 sm:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              href={`/courses/ucat/mock-exams/${exam.id}`}
              aria-label="Exit exam"
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#8B8B96] hover:bg-black/5 hover:text-[#181826]"
            >
              <X className="h-4 w-4" strokeWidth={2} />
            </Link>
            <div>
              <p className="text-[13.5px] font-bold text-[#181826]">{exam.title}</p>
              <p className="text-[11.5px] text-[#8B8B96]">
                {question.section} · Question {index + 1} of {questions.length}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-semibold ${
                timeLeft < 60 ? "bg-[#FDEAEA] text-[#D2454F]" : "bg-[#ECEEFD] text-brand"
              }`}
            >
              <Clock className="h-3.5 w-3.5" strokeWidth={2} />
              {formatTime(timeLeft)}
            </span>
            <button
              onClick={handleSubmit}
              className="rounded-full bg-brand px-4 py-2 text-[12.5px] font-semibold text-white hover:opacity-90"
            >
              Submit exam
            </button>
          </div>
        </div>
      </div>

      <main className="mx-auto w-full max-w-[1440px] flex-1 px-6 py-6 sm:px-10">
        <div className="no-scrollbar flex gap-1.5 overflow-x-auto pb-1">
          {questions.map((q, i) => {
            const isCurrent = i === index;
            const isAnswered = answers[q.id] !== undefined;
            const qFlagged = flagged.has(q.id);
            return (
              <button
                key={q.id}
                onClick={() => setIndex(i)}
                className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-md border text-[11.5px] font-semibold ${
                  isCurrent
                    ? "border-brand bg-brand text-white"
                    : isAnswered
                      ? "border-brand/30 bg-[#ECEEFD] text-brand"
                      : "border-black/10 bg-white text-[#8B8B96]"
                }`}
              >
                {i + 1}
                {qFlagged && (
                  <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#F0A73C]" />
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-5 rounded-xl border border-black/5 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-3">
            <span className="rounded-full bg-[#ECEEFD] px-2.5 py-1 text-[11px] font-semibold text-brand">
              {question.section}
            </span>
            <button
              onClick={toggleFlag}
              className={`flex items-center gap-1.5 text-[12.5px] font-medium ${
                isFlagged ? "text-[#F0A73C]" : "text-[#8B8B96] hover:text-[#181826]"
              }`}
            >
              <Flag className="h-4 w-4" strokeWidth={1.8} fill={isFlagged ? "#F0A73C" : "none"} />
              {isFlagged ? "Flagged" : "Flag for review"}
            </button>
          </div>

          <p className="mt-4 text-[15px] leading-relaxed text-[#181826]">{question.stem}</p>

          <div className="mt-5 flex flex-col gap-2.5">
            {question.options.map((opt, i) => {
              const isSelected = answers[question.id] === i;
              return (
                <button
                  key={i}
                  onClick={() => selectOption(i)}
                  className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-[13.5px] transition-colors ${
                    isSelected
                      ? "border-brand bg-[#ECEEFD] text-[#181826]"
                      : "border-black/10 text-[#4B4B57] hover:border-black/20"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold ${
                      isSelected ? "border-brand bg-brand text-white" : "border-black/20 text-[#8B8B96]"
                    }`}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className="flex items-center gap-1.5 rounded-full border border-black/10 px-4 py-2 text-[13px] font-semibold text-[#4B4B57] hover:border-black/20 disabled:opacity-40"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
            Previous
          </button>

          <span className="text-[12px] text-[#8B8B96]">
            {answeredCount}/{questions.length} answered
          </span>

          {isLast ? (
            <button
              onClick={handleSubmit}
              className="flex items-center gap-1.5 rounded-full bg-brand px-5 py-2 text-[13px] font-semibold text-white hover:opacity-90"
            >
              Submit exam
            </button>
          ) : (
            <button
              onClick={() => setIndex((i) => Math.min(questions.length - 1, i + 1))}
              className="flex items-center gap-1.5 rounded-full bg-brand px-5 py-2 text-[13px] font-semibold text-white hover:opacity-90"
            >
              Next
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
