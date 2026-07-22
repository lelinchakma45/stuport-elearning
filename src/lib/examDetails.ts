export interface SectionResult {
  name: string;
  correct: number;
  total: number;
  yourScore: number;
  avgScore: number;
}

export interface ExamDetail {
  examId: string;
  instructions: string[];
  sections: SectionResult[];
  percentile?: number;
  timeTaken?: string;
}

const standardInstructions = [
  "This mock exam is timed — once you start, the countdown cannot be paused.",
  "Each section must be completed before moving to the next; you cannot return to a previous section.",
  "Use the flag button to mark questions you want to revisit before submitting a section.",
  "Your results, including a section-by-section breakdown, will be available immediately after submission.",
];

export const examDetails: Record<string, ExamDetail> = {
  "full-mock-1": {
    examId: "full-mock-1",
    instructions: standardInstructions,
    timeTaken: "1h 52min",
    percentile: 74,
    sections: [
      { name: "Verbal Reasoning", correct: 30, total: 44, yourScore: 68, avgScore: 61 },
      { name: "Decision Making", correct: 20, total: 29, yourScore: 69, avgScore: 58 },
      { name: "Quantitative Reasoning", correct: 24, total: 36, yourScore: 67, avgScore: 63 },
      { name: "Abstract Reasoning", correct: 32, total: 55, yourScore: 58, avgScore: 55 },
      { name: "Situational Judgement", correct: 55, total: 69, yourScore: 80, avgScore: 66 },
    ],
  },
  "full-mock-2": {
    examId: "full-mock-2",
    instructions: standardInstructions,
    timeTaken: "0h 47min so far",
    sections: [
      { name: "Verbal Reasoning", correct: 18, total: 44, yourScore: 41, avgScore: 61 },
      { name: "Decision Making", correct: 12, total: 29, yourScore: 41, avgScore: 58 },
    ],
  },
  "verbal-mock": {
    examId: "verbal-mock",
    instructions: standardInstructions,
    timeTaken: "19min",
    percentile: 55,
    sections: [{ name: "Verbal Reasoning", correct: 29, total: 44, yourScore: 65, avgScore: 61 }],
  },
  "decision-mock": {
    examId: "decision-mock",
    instructions: standardInstructions,
    sections: [],
  },
  "quant-mock": {
    examId: "quant-mock",
    instructions: standardInstructions,
    sections: [],
  },
  "situational-mock": {
    examId: "situational-mock",
    instructions: standardInstructions,
    timeTaken: "24min",
    percentile: 81,
    sections: [{ name: "Situational Judgement", correct: 54, total: 69, yourScore: 78, avgScore: 66 }],
  },
};
