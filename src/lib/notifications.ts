export type NotificationIcon = "bell" | "trophy" | "message" | "calendar";

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  icon: NotificationIcon;
}

export const notifications: NotificationItem[] = [
  {
    id: "n1",
    title: "Exam reminder",
    description: "Your UCAT exam is in 3 months — stay on track!",
    time: "2h ago",
    read: false,
    icon: "calendar",
  },
  {
    id: "n2",
    title: "New badge earned",
    description: "You unlocked the '7-Day Streak' badge.",
    time: "1d ago",
    read: false,
    icon: "trophy",
  },
  {
    id: "n3",
    title: "Tutor replied",
    description: "Minhas Asif replied to your question in Verbal Reasoning.",
    time: "2d ago",
    read: true,
    icon: "message",
  },
  {
    id: "n4",
    title: "New course added",
    description: "BMAT Interview Prep is now available.",
    time: "4d ago",
    read: true,
    icon: "bell",
  },
];
