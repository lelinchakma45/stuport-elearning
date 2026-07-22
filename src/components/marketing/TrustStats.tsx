import { trustStats } from "@/lib/marketing";

export default function TrustStats() {
  return (
    <section className="grid grid-cols-2 gap-4 border-y border-black/5 py-8 sm:grid-cols-4">
      {trustStats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-[24px] font-extrabold text-[#181826]">{stat.value}</p>
          <p className="mt-1 text-[12px] text-[#8B8B96]">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
