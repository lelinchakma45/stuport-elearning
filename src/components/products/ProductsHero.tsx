export default function ProductsHero() {
  return (
    <div
      className="rounded-2xl px-8 py-8"
      style={{
        background:
          "linear-gradient(110deg, #EAEAF7 0%, #F7F0FD 45%, #E4E9FC 75%, #C5CBF8 100%)",
      }}
    >
      <p className="text-[13px] font-semibold text-brand">Shop</p>
      <h1 className="mt-1.5 max-w-xl text-[22px] font-bold leading-snug text-[#181826]">
        Books, flashcards &amp; question banks to fuel your prep
      </h1>
      <p className="mt-2 max-w-lg text-[13.5px] leading-relaxed text-[#5B5B68]">
        Everything you need beyond the course — physical guides, digital flashcards, and question
        bank access for UCAT, GAMSAT &amp; BMAT.
      </p>
    </div>
  );
}
