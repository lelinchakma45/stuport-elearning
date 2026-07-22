export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  outcome: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sophie R.",
    initials: "SR",
    outcome: "UCAT — 2986 · Offer from Oxford Medicine",
    quote:
      "The structured question bank and progress tracking kept me accountable every single week. I went from guessing to genuinely understanding my weak areas.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Daniel K.",
    initials: "DK",
    outcome: "GAMSAT — 68 overall",
    quote:
      "Tutoring sessions were the turning point — being able to book a 1:1 the same week I got stuck on Section C made all the difference.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Imani T.",
    initials: "IT",
    outcome: "BMAT — Offer from Imperial",
    quote:
      "The interview prep course paired with the curated resources meant I walked in feeling prepared instead of anxious.",
    rating: 4,
  },
];
