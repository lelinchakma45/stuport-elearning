"use client";

import { useState } from "react";
import { Sparkles, X } from "lucide-react";

export default function TipOfTheDayBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="relative rounded-xl px-6 py-4 pr-12"
      style={{
        background: "linear-gradient(90deg, #F8F1FD 0%, #ECEEFD 60%, #E6EAFD 100%)",
      }}
    >
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss tip"
        className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#8B8B96] hover:text-[#181826]"
      >
        <X className="h-3.5 w-3.5" strokeWidth={2} />
      </button>
      <p className="flex items-center gap-2 text-[14px] font-bold text-[#181826]">
        <Sparkles className="h-4 w-4 text-brand" strokeWidth={2} />
        Tip of the day
      </p>
      <p className="mt-1.5 max-w-4xl text-[12.5px] leading-relaxed text-[#5B5B68]">
        A key part of good UCAT preparation, and subsequently a good performance, is making sure
        you have prepared well for each and every section. This starts with learning what skills
        are being tested in each individual section and then structuring your preparation to
        target these skills.
      </p>
    </div>
  );
}
