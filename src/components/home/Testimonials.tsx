import { Star } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section className="mt-9">
      <h2 className="text-[15px] font-bold text-[#181826]">What our students say</h2>

      <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="flex flex-col justify-between rounded-xl border border-black/5 bg-white p-5 shadow-sm"
          >
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5"
                    strokeWidth={0}
                    fill={i < t.rating ? "#F4CB15" : "#E5E5EA"}
                  />
                ))}
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-[#4B4B57]">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#B87FE0] to-[#4433C9] text-[11px] font-semibold text-white">
                {t.initials}
              </span>
              <div>
                <p className="text-[13px] font-bold text-[#181826]">{t.name}</p>
                <p className="text-[11.5px] text-[#8B8B96]">{t.outcome}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
