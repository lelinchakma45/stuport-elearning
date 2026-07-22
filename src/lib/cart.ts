import type { CourseTheme } from "./courses";

export interface CartItem {
  code: string;
  name: string;
  theme: CourseTheme;
  price: number;
  description: string;
  hours: number;
  lessons: number;
  enrolled: number;
}

export interface LiveDayOption {
  id: string;
  name: string;
  price: number;
  description: string;
  badge?: { label: string; icon: "zap" | "star"; tone: "purple" | "orange" };
}

export interface SummaryLineItem {
  id: string;
  name: string;
  price: number;
}

const ucatBlurb =
  "The University Clinical Aptitude Test (UCAT) is an exam used in the application process for most medical...";

export const cartItems: CartItem[] = [
  {
    code: "UCAT",
    name: "UCAT",
    theme: "purple",
    price: 69,
    description: ucatBlurb,
    hours: 12,
    lessons: 6,
    enrolled: 26,
  },
];

export const liveDayOptions: LiveDayOption[] = [
  { id: "day-a", name: "UCAT live day A", price: 399, description: ucatBlurb },
  { id: "day-b", name: "UCAT live day B", price: 399, description: ucatBlurb },
  {
    id: "book",
    name: "UCAT Book",
    price: 399,
    description: ucatBlurb,
    badge: { label: "Recommended", icon: "zap", tone: "purple" },
  },
  {
    id: "mmi-a",
    name: "MMI Circuit A",
    price: 399,
    description: ucatBlurb,
    badge: { label: "Most popular", icon: "star", tone: "orange" },
  },
  { id: "mmi-b", name: "MMI Circuit B", price: 399, description: ucatBlurb },
  { id: "mmi-c", name: "MMI Circuit C", price: 399, description: ucatBlurb },
];

export const defaultSelectedLiveDays = ["book"];

export const orderSummaryInit = {
  spent: 210,
  goal: 300,
  discountLabel: "10% off",
  lineItems: [
    { id: "1", name: "UCAT Book", price: 399 },
    { id: "2", name: "Medicine work experience", price: 399 },
  ] as SummaryLineItem[],
  otherCharges: 501,
};
