import { Globe, Mail, MessageCircle, Share2 } from "lucide-react";

const columns = [
  {
    title: "Courses",
    links: ["UCAT", "GAMSAT", "BMAT", "Personal Statement", "Interview Prep"],
  },
  {
    title: "Tutoring",
    links: ["1:1 Tutoring", "Group Sessions", "Mock Interviews", "Book a Tutor"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Press"],
  },
  {
    title: "Support",
    links: ["Help Centre", "Contact Us", "FAQs", "Student Community"],
  },
];

const socials = [Globe, Mail, MessageCircle, Share2];

export default function SiteFooter() {
  return (
    <footer className="mt-12 bg-brand-dark text-white/80">
      <div className="mx-auto max-w-[1440px] px-10 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#B87FE0] via-[#8B6BE8] to-white">
                <span className="h-2.5 w-2.5 rounded-full border-2 border-brand-dark" />
              </span>
              <span className="text-[13px] font-extrabold tracking-[0.12em] text-white">
                STUDY MIND
              </span>
            </div>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-white/60">
              Curated courses and 1:1 tutoring to help you get into Medicine, Dentistry, and
              Veterinary school.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[12.5px] font-semibold uppercase tracking-wide text-white">
                {col.title}
              </h4>
              <ul className="mt-3 flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-white/60 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[12px] text-white/50 sm:flex-row">
          <span>&copy; 2026 Study Mind. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
