import { tutoringStats } from "@/lib/tutors";

export default function TutoringHero() {
  return (
    <div
      className="rounded-2xl px-8 py-8"
      style={{
        background:
          "linear-gradient(110deg, #EAEAF7 0%, #F7F0FD 45%, #E4E9FC 75%, #C5CBF8 100%)",
      }}
    >
      <p className="text-[13px] font-semibold text-brand">1:1 Tutoring</p>
      <h1 className="mt-1.5 max-w-xl text-[22px] font-bold leading-snug text-[#181826]">
        Learn faster with expert UCAT, GAMSAT &amp; BMAT tutors
      </h1>
      <p className="mt-2 max-w-lg text-[13.5px] leading-relaxed text-[#5B5B68]">
        Book a session with a tutor who&apos;s already scored where you want to be — personalised
        feedback, real exam strategy, and flexible scheduling.
      </p>
      <button className="mt-5 rounded-full bg-brand px-5 py-2.5 text-[13px] font-semibold text-white hover:opacity-90">
        Find your tutor
      </button>

      <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {tutoringStats.map((stat) => (
          <div key={stat.label} className="rounded-xl bg-white/60 p-3.5 text-center backdrop-blur-sm">
            <p className="text-[17px] font-extrabold text-[#181826]">{stat.value}</p>
            <p className="text-[11px] text-[#5B5B68]">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
