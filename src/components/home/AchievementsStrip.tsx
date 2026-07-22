import { Award, Book, Flame, Lock, Star, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { AchievementIcon } from "@/lib/achievements";
import { achievements } from "@/lib/achievements";

const iconMap: Record<AchievementIcon, LucideIcon> = {
  flame: Flame,
  award: Award,
  target: Target,
  book: Book,
  star: Star,
};

export default function AchievementsStrip() {
  return (
    <section className="mt-9">
      <div className="flex items-center justify-between">
        <h2 className="text-[15px] font-bold text-[#181826]">Achievements</h2>
        <span className="text-[12.5px] text-[#8B8B96]">
          {achievements.filter((a) => a.earned).length}/{achievements.length} earned
        </span>
      </div>

      <div className="no-scrollbar mt-4 flex gap-4 overflow-x-auto pb-1">
        {achievements.map((achievement) => {
          const Icon = iconMap[achievement.icon];
          return (
            <div
              key={achievement.id}
              className={`flex w-44 shrink-0 flex-col items-center gap-2 rounded-xl border p-4 text-center ${
                achievement.earned
                  ? "border-black/5 bg-white shadow-sm"
                  : "border-dashed border-black/10 bg-white/60"
              }`}
            >
              <span
                className={`relative flex h-11 w-11 items-center justify-center rounded-full ${
                  !achievement.earned && "grayscale"
                }`}
                style={{ backgroundColor: achievement.tint }}
              >
                <Icon className="h-5 w-5" strokeWidth={2} style={{ color: achievement.color }} />
                {!achievement.earned && (
                  <span className="absolute -bottom-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-white text-[#8B8B96] ring-1 ring-black/10">
                    <Lock className="h-2.5 w-2.5" strokeWidth={2.2} />
                  </span>
                )}
              </span>
              <p
                className={`text-[12.5px] font-bold ${
                  achievement.earned ? "text-[#181826]" : "text-[#B5B5BD]"
                }`}
              >
                {achievement.title}
              </p>
              <p className="text-[11px] leading-snug text-[#8B8B96]">{achievement.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
