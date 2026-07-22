import { Eye, PawPrint, Pill, Smile, Stethoscope } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CategoryIcon } from "@/lib/categories";
import { categories } from "@/lib/categories";

const iconMap: Record<CategoryIcon, LucideIcon> = {
  stethoscope: Stethoscope,
  smile: Smile,
  paw: PawPrint,
  eye: Eye,
  pill: Pill,
};

export default function CategoryBrowser() {
  return (
    <section className="mt-9">
      <h2 className="text-[15px] font-bold text-[#181826]">Browse by category</h2>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {categories.map((category) => {
          const Icon = iconMap[category.icon];
          return (
            <a
              key={category.id}
              href="#featured-courses"
              className="flex flex-col items-center gap-2 rounded-xl border border-black/5 bg-white p-4 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ECEEFD] text-brand">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <span className="text-[13px] font-semibold text-[#181826]">{category.name}</span>
              <span className="text-[11px] text-[#8B8B96]">{category.courseCount} courses</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
