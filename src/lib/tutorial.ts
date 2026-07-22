export interface TutorialItem {
  id: string;
  number: number;
  title: string;
  meta: string;
  type: "pdf" | "video";
  progress?: number;
}

export const tutorials: TutorialItem[] = [
  { id: "new-ucat-book", number: 1, title: "New UCAT Book", meta: "16 chapters · 1hr read", type: "pdf" },
  {
    id: "verbal-reasoning",
    number: 2,
    title: "Introduction to Verbal Reasoning",
    meta: "36 min / 1h 13 min",
    type: "video",
    progress: 50,
  },
  { id: "guidance", number: 3, title: "Guidance on UCAT Course", meta: "16 chapters · 1hr read", type: "pdf" },
  { id: "true-false", number: 4, title: "True, False, Can't Tell", meta: "20 min / 1h 20 min", type: "video", progress: 20 },
  { id: "inferences", number: 5, title: "Using Inferences", meta: "15 sec / 03 min", type: "video", progress: 8 },
  { id: "extreme-language", number: 6, title: "Extreme Language", meta: "5 min / 12 min", type: "video", progress: 23 },
  { id: "keyword-approach", number: 7, title: "Keyword Approach", meta: "03 min", type: "video", progress: 0 },
  { id: "passage-adjustments-1", number: 8, title: "Passage Adjustments", meta: "03 min", type: "video", progress: 0 },
  { id: "passage-adjustments-2", number: 9, title: "Passage Adjustments", meta: "03 min", type: "video", progress: 0 },
  { id: "writer-questions", number: 10, title: "Writer Questions", meta: "03 min", type: "video", progress: 0 },
];

export const courseCompletion = {
  watched: 6,
  total: 19,
  percent: 54,
};

export interface CourseNote {
  id: string;
  title: string;
  time: string;
  date: string;
  body?: string[];
}

const ucatNoteParagraph =
  "The University Clinical Aptitude Test (UCAT) is an exam used in the application process for most medical and dental schools in the UK. This entrance test is used to distinguish between otherwise similarly accomplished applicants to ensure that the best are invited to interview for a spot on the aforementioned prestigious courses.";

export const notes: CourseNote[] = [
  { id: "n1", title: "UCAT Chapter 2 notes", time: "12:23:00", date: "Oct 09, 2024" },
  {
    id: "n2",
    title: "UCAT Chapter 5 notes",
    time: "12:23:00",
    date: "Oct 09, 2024",
    body: [ucatNoteParagraph, ucatNoteParagraph],
  },
];
