import type { Metadata } from "next";
import MarketingHero from "@/components/marketing/MarketingHero";
import TrustStats from "@/components/marketing/TrustStats";
import FeaturesGrid from "@/components/marketing/FeaturesGrid";
import CoursesPreview from "@/components/marketing/CoursesPreview";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/marketing/FinalCTA";

export const metadata: Metadata = {
  title: "Study Mind | UCAT, GAMSAT & BMAT prep",
  description: "Structured courses, 1:1 tutoring, and thousands of practice questions.",
};

export default function MarketingPage() {
  return (
    <>
      <MarketingHero />
      <div className="mx-auto w-full max-w-[1440px] px-10">
        <TrustStats />
        <FeaturesGrid />
        <CoursesPreview />
        <Testimonials />
        <FinalCTA />
      </div>
    </>
  );
}
