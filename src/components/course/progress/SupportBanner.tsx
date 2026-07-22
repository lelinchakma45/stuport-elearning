export default function SupportBanner() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-[#ECECFA] to-[#F5F0FF] p-5">
      <p className="max-w-[70%] text-[13.5px] font-bold text-[#181826]">
        Need personalised support?
      </p>
      <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-[#8B8B96]">
        1-1 UCAT Tutoring
      </p>
      <button className="mt-8 rounded-full bg-brand px-4 py-2 text-[12.5px] font-semibold text-white hover:opacity-90">
        I need support
      </button>
      <span aria-hidden className="absolute -right-1 top-1 text-5xl">
        🎈
      </span>
    </div>
  );
}
