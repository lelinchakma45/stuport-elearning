"use client";

import { usePathname } from "next/navigation";
import AnnouncementBar from "./AnnouncementBar";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import PublicHeader from "./PublicHeader";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isImmersive = pathname?.endsWith("/take") || pathname === "/login" || pathname === "/signup";
  const isPublicMarketing = pathname === "/";

  if (isImmersive) {
    return <>{children}</>;
  }

  if (isPublicMarketing) {
    return (
      <>
        <PublicHeader />
        {children}
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
