import type { CourseTheme } from "./courses";

export interface TutoringSession {
  id: string;
  tutor: string;
  initials: string;
  subject: string;
  date: string;
  time: string;
  mode: "Online" | "In-person";
  theme: CourseTheme;
}

export const upcomingSessions: TutoringSession[] = [
  {
    id: "s1",
    tutor: "Dr. Amelia Hart",
    initials: "AH",
    subject: "UCAT — Decision Making",
    date: "Thu, 24 Jul",
    time: "4:00 – 5:00 PM",
    mode: "Online",
    theme: "purple",
  },
  {
    id: "s2",
    tutor: "Dr. Ben Ochieng",
    initials: "BO",
    subject: "GAMSAT — Section C",
    date: "Fri, 25 Jul",
    time: "10:00 – 11:00 AM",
    mode: "Online",
    theme: "orange",
  },
  {
    id: "s3",
    tutor: "Dr. Priya Nair",
    initials: "PN",
    subject: "BMAT — Section 2",
    date: "Mon, 28 Jul",
    time: "6:00 – 7:00 PM",
    mode: "In-person",
    theme: "green",
  },
];
