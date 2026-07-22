const avatars = [
  { top: "6%", left: "4%", ring: "#4F8EF7", bg: "#DCE9FE" },
  { top: "14%", right: "6%", ring: "#F76FA6", bg: "#FCE1EC" },
  { bottom: "10%", left: "2%", ring: "#2DD4CF", bg: "#D8FBF9" },
  { bottom: "4%", right: "0%", ring: "#22B8A0", bg: "#D3F5EE" },
] as const;

export default function CourseCardStack() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-md">
      {avatars.map((a, i) => (
        <span
          key={i}
          className="absolute flex h-11 w-11 items-center justify-center rounded-full border-[3px]"
          style={{
            top: "top" in a ? a.top : undefined,
            bottom: "bottom" in a ? a.bottom : undefined,
            left: "left" in a ? a.left : undefined,
            right: "right" in a ? a.right : undefined,
            borderColor: a.ring,
            backgroundColor: a.bg,
          }}
        />
      ))}

      {/* back-left card */}
      <div className="absolute left-[6%] top-[22%] w-[62%] -rotate-6 overflow-hidden rounded-xl bg-white opacity-60 shadow-lg">
        <div className="diagonal-stripes flex h-16 items-center justify-center bg-[#019D4F]">
          <span className="text-lg font-extrabold text-white/95">UCAT</span>
        </div>
        <div className="space-y-1.5 p-3">
          <div className="h-2 w-2/3 rounded-full bg-black/10" />
          <div className="h-2 w-1/2 rounded-full bg-black/10" />
        </div>
      </div>

      {/* back-right card */}
      <div className="absolute right-[4%] top-[24%] w-[62%] rotate-6 overflow-hidden rounded-xl bg-white opacity-60 shadow-lg">
        <div className="diagonal-stripes flex h-16 items-center justify-center bg-[#1F114E]">
          <span className="text-lg font-extrabold text-white/95">BMAT</span>
        </div>
        <div className="space-y-1.5 p-3">
          <div className="h-2 w-2/3 rounded-full bg-black/10" />
          <div className="h-2 w-1/2 rounded-full bg-black/10" />
        </div>
      </div>

      {/* front card */}
      <div className="absolute left-1/2 top-[30%] w-[72%] -translate-x-1/2 overflow-hidden rounded-xl bg-white shadow-2xl">
        <div className="diagonal-stripes flex h-24 items-center justify-center bg-[#DA3600]">
          <span className="text-2xl font-extrabold tracking-wide text-white/95">GAMSAT</span>
        </div>
        <div className="p-4">
          <p className="text-[15px] font-bold text-[#181826]">GAMSAT</p>
          <div className="mt-2.5 flex items-center gap-2">
            <div className="h-2 w-10 rounded-full bg-[#ECEEFD]" />
            <div className="h-2 w-14 rounded-full bg-black/10" />
            <div className="h-2 w-10 rounded-full bg-black/10" />
            <div className="h-2 w-6 rounded-full bg-black/10" />
          </div>
          <p className="mt-3 text-[12.5px] leading-relaxed text-[#5B5B68]">
            Discover everything you need to know about our GAMSAT course!
          </p>
          <div className="mt-3.5 h-7 w-24 rounded-full bg-black/[0.06]" />
        </div>
      </div>
    </div>
  );
}
