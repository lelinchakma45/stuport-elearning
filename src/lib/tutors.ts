import type { ExamType } from "./courses";

export interface Tutor {
  id: string;
  name: string;
  initials: string;
  color: string;
  subjects: ExamType[];
  specialty: string;
  rating: number;
  sessionsCompleted: number;
  pricePerHour: number;
  bio: string;
}

export const tutors: Tutor[] = [
  {
    id: "minhas-asif",
    name: "Minhas Asif",
    initials: "MA",
    color: "#C59BF7",
    subjects: ["UCAT"],
    specialty: "UCAT expert & AR specialist",
    rating: 4.9,
    sessionsCompleted: 312,
    pricePerHour: 45,
    bio: "Scored in the 99th percentile on UCAT and has coached over 300 students into medical school.",
  },
  {
    id: "sophia-rodriguez",
    name: "Sophia Rodriguez",
    initials: "SR",
    color: "#FFBE82",
    subjects: ["UCAT", "GAMSAT"],
    specialty: "Verbal Reasoning & Decision Making",
    rating: 4.8,
    sessionsCompleted: 198,
    pricePerHour: 42,
    bio: "Specialises in breaking down tricky VR passages and decision-making scenarios step by step.",
  },
  {
    id: "javier-santos",
    name: "Javier Santos",
    initials: "JS",
    color: "#FCD75D",
    subjects: ["BMAT"],
    specialty: "BMAT Section 2 & Interviews",
    rating: 4.9,
    sessionsCompleted: 145,
    pricePerHour: 48,
    bio: "Former BMAT examiner turned tutor, focused on scientific reasoning and interview technique.",
  },
  {
    id: "luna-chen",
    name: "Luna Chen",
    initials: "LC",
    color: "#8FE3C0",
    subjects: ["GAMSAT"],
    specialty: "GAMSAT Section C & Essays",
    rating: 4.7,
    sessionsCompleted: 210,
    pricePerHour: 44,
    bio: "Helps students structure high-scoring GAMSAT essays under real exam time pressure.",
  },
  {
    id: "avery-thompson",
    name: "Avery Thompson",
    initials: "AT",
    color: "#9BC9F7",
    subjects: ["UCAT", "BMAT"],
    specialty: "Quantitative Reasoning",
    rating: 4.8,
    sessionsCompleted: 167,
    pricePerHour: 40,
    bio: "Maths-first approach to quant reasoning with quick mental-math shortcuts for time pressure.",
  },
  {
    id: "carlos-ramirez",
    name: "Carlos Ramirez",
    initials: "CR",
    color: "#F79BAE",
    subjects: ["UCAT"],
    specialty: "Situational Judgement",
    rating: 4.9,
    sessionsCompleted: 224,
    pricePerHour: 43,
    bio: "Ex-NHS clinician bringing real-world judgement scenarios into every session.",
  },
];

export const tutoringStats = [
  { label: "Expert tutors", value: "40+" },
  { label: "Average rating", value: "4.9★" },
  { label: "Sessions delivered", value: "12,000+" },
  { label: "Offer success rate", value: "87%" },
];

export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  sessions: number;
  description: string;
  featured: boolean;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "single",
    name: "Single Session",
    price: 45,
    sessions: 1,
    description: "Try a 1:1 session with any tutor, no commitment.",
    featured: false,
  },
  {
    id: "pack5",
    name: "5-Session Pack",
    price: 200,
    sessions: 5,
    description: "Save 11% with a bundle of 5 sessions with your chosen tutor.",
    featured: true,
  },
  {
    id: "pack10",
    name: "10-Session Pack",
    price: 380,
    sessions: 10,
    description: "Best value for sustained, exam-ready preparation.",
    featured: false,
  },
];
