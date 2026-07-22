export type CourseTheme = "purple" | "orange" | "green";
export type ExamType = "UCAT" | "GAMSAT" | "BMAT";

export const examTypes: ExamType[] = ["UCAT", "GAMSAT", "BMAT"];

export const themeStyles: Record<CourseTheme, { bg: string; text: string }> = {
  purple: { bg: "#1F114E", text: "text-white" },
  orange: { bg: "#DA3600", text: "text-white" },
  green: { bg: "#019D4F", text: "text-white" },
};

interface CourseBase {
  code: string;
  name: string;
  theme: CourseTheme;
  examType: ExamType;
  hours: number;
  lessons: number;
  enrolled: number;
}

export interface ProgressCourse extends CourseBase {
  completed: number;
}

export interface FeaturedCourse extends CourseBase {
  price: string;
  faded?: boolean;
}

export interface RecommendedCourse extends CourseBase {
  price: string;
  reason: string;
}

export const progressCourses: ProgressCourse[] = [
  {
    code: "UCAT",
    name: "UCAT",
    theme: "purple",
    examType: "UCAT",
    completed: 83,
    hours: 12,
    lessons: 6,
    enrolled: 26,
  },
  {
    code: "GAMSAT",
    name: "GAMSAT",
    theme: "orange",
    examType: "GAMSAT",
    completed: 83,
    hours: 12,
    lessons: 6,
    enrolled: 26,
  },
  {
    code: "UCAT",
    name: "UCAT",
    theme: "green",
    examType: "UCAT",
    completed: 51,
    hours: 12,
    lessons: 6,
    enrolled: 26,
  },
];

export const featuredCourses: FeaturedCourse[] = [
  {
    code: "BMAT",
    name: "BMAT",
    theme: "purple",
    examType: "BMAT",
    price: "£69.00",
    hours: 12,
    lessons: 6,
    enrolled: 26,
  },
  {
    code: "UCAT",
    name: "UCAT",
    theme: "orange",
    examType: "UCAT",
    price: "£69.00",
    hours: 12,
    lessons: 6,
    enrolled: 26,
  },
  {
    code: "UCAT",
    name: "UCAT",
    theme: "green",
    examType: "UCAT",
    price: "£69.00",
    hours: 12,
    lessons: 6,
    enrolled: 26,
  },
  {
    code: "UCAT",
    name: "UCAT",
    theme: "orange",
    examType: "UCAT",
    price: "£69.00",
    hours: 12,
    lessons: 6,
    enrolled: 26,
  },
  {
    code: "UCAT",
    name: "UCAT",
    theme: "orange",
    examType: "UCAT",
    price: "£69.00",
    hours: 12,
    lessons: 6,
    enrolled: 26,
    faded: true,
  },
];

export const recommendedCourses: RecommendedCourse[] = [
  {
    code: "UCAT",
    name: "UCAT Question Bank",
    theme: "purple",
    examType: "UCAT",
    price: "£49.00",
    hours: 8,
    lessons: 4,
    enrolled: 18,
    reason: "Because you're studying UCAT",
  },
  {
    code: "INT",
    name: "Interview Preparation",
    theme: "orange",
    examType: "BMAT",
    price: "£59.00",
    hours: 6,
    lessons: 5,
    enrolled: 12,
    reason: "Popular with UCAT students",
  },
  {
    code: "GAMS",
    name: "GAMSAT Section C",
    theme: "green",
    examType: "GAMSAT",
    price: "£45.00",
    hours: 10,
    lessons: 7,
    enrolled: 21,
    reason: "Based on your progress",
  },
  {
    code: "PS",
    name: "Personal Statement Review",
    theme: "purple",
    examType: "BMAT",
    price: "£39.00",
    hours: 4,
    lessons: 3,
    enrolled: 9,
    reason: "Recommended for you",
  },
];
