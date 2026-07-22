import type { QuestionTopic } from "./questions";

export type AttemptStatus = "correct" | "incorrect" | "unattempted";

export interface PracticeQuestion {
  id: string;
  topicId: string;
  index: number;
  stem: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  status: AttemptStatus;
  yourAnswerIndex?: number;
  bookmarked: boolean;
}

const QUESTIONS_PER_TOPIC_DEMO = 10;

export function getTopicQuestions(topic: QuestionTopic): PracticeQuestion[] {
  const attemptedRatio = topic.answered / topic.totalQuestions;
  const demoAttempted = Math.round(attemptedRatio * QUESTIONS_PER_TOPIC_DEMO);

  return Array.from({ length: QUESTIONS_PER_TOPIC_DEMO }, (_, i) => {
    const n = i + 1;
    const correctIndex = (n * 5 + topic.id.length) % 5;
    const isAttempted = n <= demoAttempted;
    const isCorrect = isAttempted && (n * 3 + topic.id.length) % 10 < 7;
    const status: AttemptStatus = !isAttempted ? "unattempted" : isCorrect ? "correct" : "incorrect";
    const yourAnswerIndex = !isAttempted
      ? undefined
      : isCorrect
        ? correctIndex
        : (correctIndex + 1) % 5;

    return {
      id: `${topic.id}-q${n}`,
      topicId: topic.id,
      index: n,
      stem: `Sample ${topic.title} question ${n} of ${QUESTIONS_PER_TOPIC_DEMO}. Read the passage or data set above and choose the best answer.`,
      options: ["Option A", "Option B", "Option C", "Option D", "Option E"],
      correctIndex,
      explanation:
        "The correct answer follows directly from the key detail in the passage or data set — eliminate options that go beyond what's stated or contradict it.",
      status,
      yourAnswerIndex,
      bookmarked: n % 4 === 0,
    };
  });
}
