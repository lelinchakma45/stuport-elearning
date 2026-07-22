import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CartBreadcrumb() {
  return (
    <div className="border-b border-black/5 bg-white px-10 py-4">
      <div className="mx-auto flex max-w-[1440px] items-center gap-3">
        <Link
          href="/dashboard"
          aria-label="Back"
          className="flex h-7 w-7 items-center justify-center text-[#181826] hover:text-brand"
        >
          <ArrowLeft className="h-4.5 w-4.5" strokeWidth={2} />
        </Link>
        <div>
          <h1 className="text-[15px] font-bold text-[#181826]">Your cart</h1>
          <p className="text-[12.5px] text-[#8B8B96]">
            Below are the items you have added into your cart
          </p>
        </div>
      </div>
    </div>
  );
}
