import type { Metadata } from "next";
import WelcomeBanner from "@/components/home/WelcomeBanner";
import ContinueLearningCard from "@/components/home/ContinueLearningCard";
import StatsOverview from "@/components/home/StatsOverview";
import AchievementsStrip from "@/components/home/AchievementsStrip";
import PromoBanner from "@/components/home/PromoBanner";
import CategoryBrowser from "@/components/home/CategoryBrowser";
import CourseExplorer from "@/components/home/CourseExplorer";
import UpcomingSessions from "@/components/home/UpcomingSessions";
import Testimonials from "@/components/home/Testimonials";

export const metadata: Metadata = {
  title: "Dashboard | Study Mind",
};

export default function DashboardPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] flex-1 px-10 py-6">
      <WelcomeBanner />
      <ContinueLearningCard />
      <StatsOverview />
      <AchievementsStrip />
      <PromoBanner />
      <CategoryBrowser />
      <CourseExplorer />
      <UpcomingSessions />
      <Testimonials />
    </main>
  );
}
