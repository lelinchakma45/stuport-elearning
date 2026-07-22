import CourseCardStack from "./CourseCardStack";

export default function AuthShowcase() {
  return (
    <div
      className="relative hidden flex-1 overflow-hidden px-10 py-12 lg:flex lg:flex-col"
      style={{ background: "linear-gradient(135deg, #6D5CF5 0%, #4F3FD1 100%)" }}
    >
      <div className="relative z-10">
        <h2 className="max-w-sm text-[22px] font-bold text-white">
          Learn from our curated courses
        </h2>
        <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-white/70">
          Level up with our handpicked courses—crafted to make learning a breeze and success a
          guarantee! 🎉😊
        </p>
      </div>

      <div className="relative z-10 mt-8 flex flex-1 items-center rounded-2xl bg-white/10 p-6">
        <CourseCardStack />
      </div>
    </div>
  );
}
