export type AchievementIcon = "flame" | "award" | "target" | "book" | "star";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: AchievementIcon;
  earned: boolean;
  tint: string;
  color: string;
}

export const achievements: Achievement[] = [
  {
    id: "streak-7",
    title: "7-Day Streak",
    description: "Studied 7 days in a row",
    icon: "flame",
    earned: true,
    tint: "#FFF1E6",
    color: "#DA3600",
  },
  {
    id: "first-mock",
    title: "First Mock Exam",
    description: "Completed your first mock exam",
    icon: "award",
    earned: true,
    tint: "#FFF6DA",
    color: "#B98900",
  },
  {
    id: "100-questions",
    title: "Century Club",
    description: "Answered 100 practice questions",
    icon: "target",
    earned: true,
    tint: "#ECEEFD",
    color: "#4433C9",
  },
  {
    id: "ucat-fundamentals",
    title: "UCAT Fundamentals",
    description: "Certificate of completion",
    icon: "book",
    earned: false,
    tint: "#E6F7EE",
    color: "#019D4F",
  },
  {
    id: "top-scorer",
    title: "Top Scorer",
    description: "Score 90%+ on a mock exam",
    icon: "star",
    earned: false,
    tint: "#FDEAEA",
    color: "#D2454F",
  },
];
