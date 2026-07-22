import Link from "next/link";

const navLinks = [
  { label: "Courses", href: "#courses" },
  { label: "Why Study Mind", href: "#features" },
];

export default function PublicHeader() {
  return (
    <header className="border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-10 py-3.5">
        <Link href="/" className="flex items-center gap-2">
          <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#B87FE0] via-[#8B6BE8] to-[#4433C9]">
            <span className="h-2.5 w-2.5 rounded-full border-2 border-white" />
          </span>
          <span className="text-[13px] font-extrabold tracking-[0.12em] text-[#181826]">
            STUDY MIND
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium text-[#4B4B57] hover:text-[#181826]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="text-[13px] font-semibold text-[#181826] hover:text-brand">
            Log in
          </Link>
          <Link
            href="/login"
            className="rounded-full bg-brand px-5 py-2 text-[13px] font-semibold text-white hover:opacity-90"
          >
            Sign up free
          </Link>
        </div>
      </div>
    </header>
  );
}
