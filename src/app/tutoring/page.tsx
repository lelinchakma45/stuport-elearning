import type { Metadata } from "next";
import TutoringHero from "@/components/tutoring/TutoringHero";
import TutorBrowser from "@/components/tutoring/TutorBrowser";
import HowItWorks from "@/components/tutoring/HowItWorks";
import PricingPackages from "@/components/tutoring/PricingPackages";

export const metadata: Metadata = {
  title: "Tutoring | Study Mind",
};

export default function TutoringPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] flex-1 px-10 py-6">
      <TutoringHero />
      <TutorBrowser />
      <HowItWorks />
      <PricingPackages />
    </main>
  );
}
