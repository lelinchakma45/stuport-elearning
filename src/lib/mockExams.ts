export type ExamStatus = "not-started" | "in-progress" | "completed";

export interface MockExam {
  id: string;
  title: string;
  sections: number;
  questions: number;
  duration: string;
  status: ExamStatus;
  score?: number;
  attempts: number;
  dateTaken?: string;
}

export const mockExams: MockExam[] = [
  {
    id: "full-mock-1",
    title: "Full Mock Exam 1",
    sections: 5,
    questions: 233,
    duration: "2h 00min",
    status: "completed",
    score: 72,
    attempts: 1,
    dateTaken: "Jun 14, 2026",
  },
  {
    id: "full-mock-2",
    title: "Full Mock Exam 2",
    sections: 5,
    questions: 233,
    duration: "2h 00min",
    status: "in-progress",
    score: 41,
    attempts: 1,
  },
  {
    id: "verbal-mock",
    title: "Verbal Reasoning Mock",
    sections: 1,
    questions: 44,
    duration: "21 min",
    status: "completed",
    score: 65,
    attempts: 2,
    dateTaken: "May 30, 2026",
  },
  {
    id: "decision-mock",
    title: "Decision Making Mock",
    sections: 1,
    questions: 29,
    duration: "31 min",
    status: "not-started",
    attempts: 0,
  },
  {
    id: "quant-mock",
    title: "Quantitative Reasoning Mock",
    sections: 1,
    questions: 36,
    duration: "25 min",
    status: "not-started",
    attempts: 0,
  },
  {
    id: "situational-mock",
    title: "Situational Judgement Mock",
    sections: 1,
    questions: 69,
    duration: "26 min",
    status: "completed",
    score: 78,
    attempts: 1,
    dateTaken: "Jun 02, 2026",
  },
];

export const mockExamStats = {
  taken: 4,
  averageScore: 64,
  bestScore: 78,
  timeSpent: "6h 42min",
};

export const statusFilters: { id: "all" | ExamStatus; label: string }[] = [
  { id: "all", label: "All" },
  { id: "not-started", label: "Not started" },
  { id: "in-progress", label: "In progress" },
  { id: "completed", label: "Completed" },
];
