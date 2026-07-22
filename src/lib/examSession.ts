export interface ExamQuestion {
  id: string;
  section: string;
  index: number;
  stem: string;
  options: string[];
  correctIndex: number;
}

export interface ExamBlueprint {
  questions: ExamQuestion[];
  durationSeconds: number;
}

export const examSectionNames: Record<string, string[]> = {
  "full-mock-1": [
    "Verbal Reasoning",
    "Decision Making",
    "Quantitative Reasoning",
    "Abstract Reasoning",
    "Situational Judgement",
  ],
  "full-mock-2": [
    "Verbal Reasoning",
    "Decision Making",
    "Quantitative Reasoning",
    "Abstract Reasoning",
    "Situational Judgement",
  ],
  "verbal-mock": ["Verbal Reasoning"],
  "decision-mock": ["Decision Making"],
  "quant-mock": ["Quantitative Reasoning"],
  "situational-mock": ["Situational Judgement"],
};

const QUESTIONS_PER_SECTION = 5;
const SECONDS_PER_QUESTION = 60;

function buildSectionQuestions(section: string, count: number): ExamQuestion[] {
  return Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    return {
      id: `${section.toLowerCase().replace(/\s+/g, "-")}-${n}`,
      section,
      index: n,
      stem: `Sample ${section} question ${n} of ${count}. Read the passage or data set above and choose the best answer.`,
      options: ["Option A", "Option B", "Option C", "Option D", "Option E"],
      correctIndex: (n * 7 + section.length) % 5,
    };
  });
}

export function getExamBlueprint(sectionNames: string[]): ExamBlueprint {
  const questions = sectionNames.flatMap((name) =>
    buildSectionQuestions(name, QUESTIONS_PER_SECTION)
  );
  return { questions, durationSeconds: questions.length * SECONDS_PER_QUESTION };
}
