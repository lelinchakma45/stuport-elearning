export interface SkillScore {
  label: string;
  studentsPct: number;
  yourPct: number;
}

export const skillScores: SkillScore[] = [
  { label: "UCAT Verbal Reasoning", studentsPct: 66, yourPct: 33 },
  { label: "UCAT Decision Making", studentsPct: 66, yourPct: 33 },
  { label: "UCAT Quantitative Reasoning", studentsPct: 66, yourPct: 33 },
  { label: "UCAT Situational Judgement", studentsPct: 66, yourPct: 33 },
];

export const performanceStats = {
  averageScore: 0,
  percentile: 8,
};

export type CalendarLevel = "none" | "some" | "most" | "testdate";

export interface CalendarMonth {
  name: string;
  cells: CalendarLevel[];
}

export const progressCalendar: CalendarMonth[] = [
  {
    name: "September",
    cells: Array<CalendarLevel>(35).fill("none"),
  },
  {
    name: "October",
    cells: [
      "none", "none", "none", "none", "none", "none", "none",
      "none", "some", "most", "testdate", "none", "some", "none",
      "none", "none", "some", "none", "none", "none", "none",
      "none", "some", "none", "none", "most", "none", "none",
      "most", "none", "none", "none", "none", "none", "none",
    ],
  },
];

export interface Tutor {
  name: string;
  role: string;
  initials: string;
  color: string;
}

export const pickedTutors: Tutor[] = [
  { name: "Minhas Asif", role: "UCAT expert & AR specialist", initials: "MA", color: "#C59BF7" },
  { name: "Sophia Rodriguez", role: "VR designer & AI researcher", initials: "SR", color: "#FFBE82" },
  { name: "Javier Santos", role: "Interaction design lead", initials: "JS", color: "#FCD75D" },
  { name: "Luna Chen", role: "UX/UI consultant", initials: "LC", color: "#8FE3C0" },
  { name: "Avery Thompson", role: "Product manager & data analyst", initials: "AT", color: "#9BC9F7" },
  { name: "Carlos Ramirez", role: "Front-end developer & graphic designer", initials: "CR", color: "#F79BAE" },
];

export const popularWithPeers = {
  title: "MMI interview circuit",
  description:
    "A key part of good UCAT preparation, and subsequently a good performance, is making sure you have prepared well for each and every course. This starts with learning what skills are being tested in each course.",
};
