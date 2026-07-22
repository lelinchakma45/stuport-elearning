export default function WelcomeBanner() {
  return (
    <div
      className="rounded-2xl px-8 py-6"
      style={{
        background:
          "linear-gradient(110deg, #EAEAF7 0%, #F7F0FD 45%, #E4E9FC 75%, #C5CBF8 100%)",
      }}
    >
      <p className="flex items-center gap-1.5 text-[13px] text-[#5B5B68]">
        Welcome to the courses, Minhas
        <span role="img" aria-label="waving hand">
          👋
        </span>
      </p>
      <h1 className="mt-1.5 max-w-2xl text-[19px] font-bold leading-snug text-[#181826]">
        Enhance your preparation with the following curated courses!
      </h1>
    </div>
  );
}
