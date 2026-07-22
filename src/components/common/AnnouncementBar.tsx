import { BadgePercent, X } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="relative bg-brand text-white text-[13px] leading-none">
      <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-1.5 px-10 py-2 text-center">
        <BadgePercent className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
        <span>
          50% off UCAT Tutoring. Call{" "}
          <a href="tel:+442033059593" className="font-semibold">
            +44 0203 305 9593
          </a>{" "}
          and quote &ldquo;<span className="font-semibold">TRIAL50</span>&rdquo; or{" "}
          <a href="#" className="underline underline-offset-2">
            click here
          </a>{" "}
          and sign up..
        </span>
      </div>
      <button
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
      >
        <X className="h-3.5 w-3.5" strokeWidth={2} />
      </button>
    </div>
  );
}
