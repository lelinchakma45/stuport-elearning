"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, ChevronDown, GraduationCap, Package, ShoppingCart } from "lucide-react";
import NotificationsDropdown from "./NotificationsDropdown";

const navItems = [
  { label: "Courses", href: "/dashboard", icon: BookOpen, dropdown: false },
  { label: "Tutoring", href: "/tutoring", icon: GraduationCap, dropdown: false },
  { label: "Products", href: "/products", icon: Package, dropdown: false },
];

export default function SiteHeader({ cartCount = 0 }: { cartCount?: number }) {
  const pathname = usePathname();

  return (
    <header className="border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-10 py-3.5">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#B87FE0] via-[#8B6BE8] to-[#4433C9]">
            <span className="h-2.5 w-2.5 rounded-full border-2 border-white" />
          </span>
          <span className="text-[13px] font-extrabold tracking-[0.12em] text-[#181826]">
            STUDY MIND
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map(({ label, href, icon: Icon, dropdown }) => {
            const active =
              href === "/dashboard"
                ? pathname === "/dashboard" || pathname?.startsWith("/courses")
                : href !== "#" && pathname?.startsWith(href);
            return (
              <Link
                key={label}
                href={href}
                className={`relative flex items-center gap-1.5 pb-4 pt-4 text-[14px] font-medium transition-colors ${
                  active ? "text-brand" : "text-[#4B4B57] hover:text-[#181826]"
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={2} />
                {label}
                {dropdown && <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} />}
                {active && (
                  <span className="absolute inset-x-0 -bottom-[1px] h-[2px] rounded-full bg-brand" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-brand px-5 py-2 text-[13px] font-semibold text-white transition-opacity hover:opacity-90">
            Contact us
          </button>

          <NotificationsDropdown />

          <Link href="/cart" aria-label="Cart" className="relative text-[#4B4B57] hover:text-[#181826]">
            <ShoppingCart className="h-5 w-5" strokeWidth={1.8} />
            <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[8px] font-bold text-white">
              {String(cartCount).padStart(2, "0")}
            </span>
          </Link>

          <button className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#F3B6D6] to-[#8B6BE8] text-[12px] font-semibold text-white ring-2 ring-white">
              M
            </span>
            <span className="hidden text-[13px] font-medium text-[#181826] lg:inline">
              Minhas D
            </span>
            <ChevronDown className="hidden h-3.5 w-3.5 text-[#4B4B57] lg:inline" strokeWidth={2} />
          </button>
        </div>
      </div>
    </header>
  );
}
