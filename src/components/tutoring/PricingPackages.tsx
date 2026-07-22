import { pricingPackages } from "@/lib/tutors";

export default function PricingPackages() {
  return (
    <section className="mt-9">
      <h2 className="text-[15px] font-bold text-[#181826]">Session packages</h2>
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {pricingPackages.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative flex flex-col rounded-xl border bg-white p-5 shadow-sm ${
              pkg.featured ? "border-2 border-brand" : "border-black/5"
            }`}
          >
            {pkg.featured && (
              <span className="absolute -top-3 left-5 rounded-full bg-brand px-3 py-1 text-[10.5px] font-semibold text-white">
                Most popular
              </span>
            )}
            <h3 className="text-[14px] font-bold text-[#181826]">{pkg.name}</h3>
            <p className="mt-2 text-[24px] font-extrabold text-[#181826]">£{pkg.price}</p>
            <p className="text-[11.5px] text-[#8B8B96]">
              {pkg.sessions} session{pkg.sessions > 1 ? "s" : ""}
            </p>
            <p className="mt-3 text-[12.5px] leading-relaxed text-[#5B5B68]">{pkg.description}</p>
            <button
              className={`mt-5 rounded-full px-4 py-2.5 text-[13px] font-semibold transition-colors ${
                pkg.featured
                  ? "bg-brand text-white hover:opacity-90"
                  : "border border-black/10 text-[#4B4B57] hover:border-black/20"
              }`}
            >
              Get started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
