export const trustStats = [
  { label: "Students", value: "50,000+" },
  { label: "Expert tutors", value: "40+" },
  { label: "Practice questions", value: "10,000+" },
  { label: "Offer success rate", value: "87%" },
];

export type FeatureIcon = "book" | "users" | "target" | "trending";

export interface Feature {
  icon: FeatureIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "book",
    title: "Structured courses",
    description:
      "Bite-sized video lessons and reading materials mapped to every UCAT, GAMSAT & BMAT section.",
  },
  {
    icon: "target",
    title: "Thousands of questions",
    description: "Practice with a huge question bank and realistic full-length mock exams.",
  },
  {
    icon: "users",
    title: "1:1 expert tutoring",
    description: "Book sessions with tutors who've already scored where you want to be.",
  },
  {
    icon: "trending",
    title: "Track your progress",
    description: "See exactly where you stand with detailed analytics and section breakdowns.",
  },
];
