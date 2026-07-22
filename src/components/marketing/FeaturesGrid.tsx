import { BookOpen, Target, TrendingUp, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { FeatureIcon } from "@/lib/marketing";
import { features } from "@/lib/marketing";

const iconMap: Record<FeatureIcon, LucideIcon> = {
  book: BookOpen,
  users: Users,
  target: Target,
  trending: TrendingUp,
};

export default function FeaturesGrid() {
  return (
    <section className="py-14">
      <h2 className="text-center text-[24px] font-bold text-[#181826]">
        Everything you need to get the offer
      </h2>
      <p className="mx-auto mt-2 max-w-md text-center text-[13.5px] leading-relaxed text-[#8B8B96]">
        One platform for courses, practice, tutoring, and tracking your progress along the way.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = iconMap[feature.icon];
          return (
            <div
              key={feature.title}
              className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ECEEFD] text-brand">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <h3 className="mt-3 text-[14px] font-bold text-[#181826]">{feature.title}</h3>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#8B8B96]">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
