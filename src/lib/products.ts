import type { CourseTheme, ExamType } from "./courses";

export type ProductCategory = "Books" | "Flashcards" | "Question Banks" | "Bundles";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  examType: ExamType;
  theme: CourseTheme;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "ucat-book",
    name: "The UCAT Book 2026",
    category: "Books",
    examType: "UCAT",
    theme: "purple",
    price: 34.99,
    rating: 4.8,
    reviews: 512,
    description: "Our flagship guide covering every UCAT subtest with worked examples and strategy.",
    badge: "Bestseller",
  },
  {
    id: "ucat-flashcards",
    name: "UCAT Flashcard Deck",
    category: "Flashcards",
    examType: "UCAT",
    theme: "purple",
    price: 19.99,
    rating: 4.6,
    reviews: 203,
    description: "300 double-sided cards covering key formulas, keywords, and SJT scenarios.",
  },
  {
    id: "gamsat-book",
    name: "The GAMSAT Book",
    category: "Books",
    examType: "GAMSAT",
    theme: "orange",
    price: 39.99,
    rating: 4.7,
    reviews: 298,
    description: "Complete GAMSAT prep covering Sections 1–3 with full-length practice papers.",
  },
  {
    id: "gamsat-qbank",
    name: "GAMSAT Question Bank Access",
    category: "Question Banks",
    examType: "GAMSAT",
    theme: "orange",
    price: 59.0,
    rating: 4.9,
    reviews: 341,
    description: "1,500+ practice questions with worked solutions, 12-month access.",
    badge: "Popular",
  },
  {
    id: "bmat-book",
    name: "The BMAT Book",
    category: "Books",
    examType: "BMAT",
    theme: "green",
    price: 32.99,
    rating: 4.7,
    reviews: 176,
    description: "Section-by-section BMAT breakdown with past paper walkthroughs.",
  },
  {
    id: "bmat-flashcards",
    name: "BMAT Science Flashcards",
    category: "Flashcards",
    examType: "BMAT",
    theme: "green",
    price: 17.99,
    rating: 4.5,
    reviews: 98,
    description: "Key biology, chemistry and physics facts tested in BMAT Section 2.",
  },
  {
    id: "ucat-qbank",
    name: "UCAT Question Bank Access",
    category: "Question Banks",
    examType: "UCAT",
    theme: "purple",
    price: 49.0,
    rating: 4.8,
    reviews: 412,
    description: "3,000+ UCAT-style questions with performance analytics, 12-month access.",
  },
  {
    id: "ultimate-bundle",
    name: "Ultimate Medicine Bundle",
    category: "Bundles",
    examType: "UCAT",
    theme: "purple",
    price: 99.0,
    rating: 4.9,
    reviews: 154,
    description:
      "Book + flashcards + question bank access for UCAT, GAMSAT & BMAT in one bundle.",
    badge: "Best value",
  },
];

export const productCategories: ProductCategory[] = ["Books", "Flashcards", "Question Banks", "Bundles"];
