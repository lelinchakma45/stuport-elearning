"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, XCircle } from "lucide-react";
import { orderSummaryInit } from "@/lib/cart";

export default function OrderSummary() {
  const [lineItems, setLineItems] = useState(orderSummaryInit.lineItems);
  const { spent, goal, discountLabel, otherCharges } = orderSummaryInit;

  const total = otherCharges + lineItems.reduce((sum, item) => sum + item.price, 0);
  const remaining = Math.max(goal - spent, 0);
  const progressPct = Math.min((spent / goal) * 100, 100);

  function removeLineItem(id: string) {
    setLineItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <aside className="rounded-xl border border-black/5 bg-white p-5 shadow-sm lg:sticky lg:top-6">
      <div className="flex items-start justify-between gap-3">
        <p className="flex items-center gap-1.5 text-[13.5px] font-bold text-[#181826]">
          <span role="img" aria-label="fire">
            🔥
          </span>
          You&apos;re close to &ldquo;{discountLabel}&rdquo;
        </p>
        <span className="shrink-0 text-[12px] text-[#8B8B96]">Spent £{spent.toFixed(2)}</span>
      </div>

      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#ECECF0]">
        <div className="h-full rounded-full bg-brand" style={{ width: `${progressPct}%` }} />
      </div>
      <div className="mt-1.5 flex items-center justify-between text-[11.5px] text-[#8B8B96]">
        <span>£0.00</span>
        <span>£{goal.toFixed(2)}</span>
      </div>

      <p className="mt-3 text-[12.5px] leading-relaxed text-[#8B8B96]">
        Hey Minhas! Just <span className="font-semibold text-[#181826]">£{remaining.toFixed(2)}</span>{" "}
        more to unlock that {discountLabel} discount— you&apos;re so close to scoring this perk!
      </p>

      <div className="mt-5 flex flex-col gap-2.5">
        {lineItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-lg border border-black/5 px-3.5 py-3"
          >
            <span className="text-[13px] font-medium text-[#181826]">{item.name}</span>
            <div className="flex items-center gap-2.5">
              <span className="text-[13px] font-semibold text-[#181826]">
                £{item.price.toFixed(2)}
              </span>
              <button
                onClick={() => removeLineItem(item.id)}
                aria-label={`Remove ${item.name}`}
                className="text-[#D2454F] hover:opacity-70"
              >
                <XCircle className="h-4 w-4" strokeWidth={1.8} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between rounded-lg bg-[#F5F5F7] px-3.5 py-4">
        <span className="text-[13.5px] font-bold text-[#181826]">Total</span>
        <span className="text-[16px] font-extrabold text-[#181826]">£{total.toFixed(2)}</span>
      </div>

      <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
        <Link
          href="/dashboard"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-black/10 px-4 py-2.5 text-[13px] font-semibold text-[#181826] hover:bg-black/[0.03]"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
          Continue shopping
        </Link>
        <button className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-brand px-4 py-2.5 text-[13px] font-semibold text-white hover:opacity-90">
          Go for checkout
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
        </button>
      </div>
    </aside>
  );
}
