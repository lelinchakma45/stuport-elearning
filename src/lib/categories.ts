export type CategoryIcon = "stethoscope" | "smile" | "paw" | "eye" | "pill";

export interface Category {
  id: string;
  name: string;
  icon: CategoryIcon;
  courseCount: number;
}

export const categories: Category[] = [
  { id: "medicine", name: "Medicine", icon: "stethoscope", courseCount: 18 },
  { id: "dentistry", name: "Dentistry", icon: "smile", courseCount: 9 },
  { id: "veterinary", name: "Veterinary", icon: "paw", courseCount: 6 },
  { id: "optometry", name: "Optometry", icon: "eye", courseCount: 4 },
  { id: "pharmacy", name: "Pharmacy", icon: "pill", courseCount: 5 },
];
