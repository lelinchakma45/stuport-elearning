import { CalendarCheck, Search, Video } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Search,
    title: "Choose your tutor",
    description: "Filter by subject and specialty to find the right expert for you.",
  },
  {
    icon: CalendarCheck,
    title: "Book a time that works",
    description: "Pick a slot from their live availability — no back-and-forth emails.",
  },
  {
    icon: Video,
    title: "Join your session",
    description: "Meet online, get personalised feedback, and track your progress.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mt-9">
      <h2 className="text-[15px] font-bold text-[#181826]">How tutoring works</h2>
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {steps.map((step, i) => (
          <div key={step.title} className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ECEEFD] text-brand">
                <step.icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <span className="text-[12px] font-bold text-[#B5B5BD]">Step {i + 1}</span>
            </div>
            <h3 className="mt-3 text-[14px] font-bold text-[#181826]">{step.title}</h3>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#8B8B96]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
