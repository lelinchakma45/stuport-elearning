import TipOfTheDayBanner from "./TipOfTheDayBanner";
import QuestionPerformanceCard from "./QuestionPerformanceCard";
import MyProgressCalendarCard from "./MyProgressCalendarCard";
import SupportBanner from "./SupportBanner";
import TutorPickedCard from "./TutorPickedCard";
import PopularWithPeersCard from "./PopularWithPeersCard";

export default function MyProgressPanel() {
  return (
    <div className="mt-5">
      <TipOfTheDayBanner />

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[1.3fr_1fr_1fr]">
        <QuestionPerformanceCard />

        <div className="flex flex-col gap-5">
          <MyProgressCalendarCard />
          <SupportBanner />
        </div>

        <div className="flex flex-col gap-5">
          <TutorPickedCard />
          <PopularWithPeersCard />
        </div>
      </div>
    </div>
  );
}
