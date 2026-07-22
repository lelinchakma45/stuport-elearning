import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="my-14">
      <div
        className="diagonal-stripes relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl px-8 py-12 text-center"
        style={{ backgroundColor: "#1F114E" }}
      >
        <h2 className="max-w-md text-[24px] font-bold text-white">
          Ready to start your journey to Medicine, Dentistry, or Vet school?
        </h2>
        <p className="max-w-sm text-[13.5px] text-white/70">
          Create a free account and get instant access to a curated UCAT course to try it out.
        </p>
        <Link
          href="/login"
          className="mt-2 flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-brand-dark hover:opacity-90"
        >
          Get started free
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
}
