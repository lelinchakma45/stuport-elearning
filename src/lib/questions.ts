export type Difficulty = "Easy" | "Medium" | "Hard" | "Mixed";

export interface QuestionTopic {
  id: string;
  title: string;
  totalQuestions: number;
  answered: number;
  accuracy: number;
  avgTime: string;
  difficulty: Difficulty;
}

export const questionTopics: QuestionTopic[] = [
  {
    id: "verbal-reasoning",
    title: "UCAT Verbal Reasoning",
    totalQuestions: 220,
    answered: 88,
    accuracy: 64,
    avgTime: "55 sec/question",
    difficulty: "Mixed",
  },
  {
    id: "decision-making",
    title: "UCAT Decision Making",
    totalQuestions: 180,
    answered: 52,
    accuracy: 58,
    avgTime: "1 min 15 sec/question",
    difficulty: "Hard",
  },
  {
    id: "quantitative-reasoning",
    title: "UCAT Quantitative Reasoning",
    totalQuestions: 200,
    answered: 96,
    accuracy: 71,
    avgTime: "58 sec/question",
    difficulty: "Medium",
  },
  {
    id: "situational-judgement",
    title: "UCAT Situational Judgement",
    totalQuestions: 160,
    answered: 76,
    accuracy: 69,
    avgTime: "45 sec/question",
    difficulty: "Medium",
  },
  {
    id: "abstract-reasoning",
    title: "UCAT Abstract Reasoning",
    totalQuestions: 150,
    answered: 20,
    accuracy: 52,
    avgTime: "40 sec/question",
    difficulty: "Easy",
  },
];

export const questionStats = {
  total: 1200,
  answered: 312,
  accuracy: 68,
  bookmarked: 14,
};

export const difficulties: Difficulty[] = ["Easy", "Medium", "Hard", "Mixed"];
