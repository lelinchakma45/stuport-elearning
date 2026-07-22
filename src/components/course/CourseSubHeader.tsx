import Link from "next/link";
import { ArrowLeft, Bell, Calendar } from "lucide-react";

export default function CourseSubHeader({
  code,
  subtitle,
  countdown,
}: {
  code: string;
  subtitle: string;
  countdown: string;
}) {
  return (
    <div className="border-b border-black/5 bg-white px-10 py-4">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            aria-label="Back"
            className="flex h-7 w-7 items-center justify-center text-[#181826] hover:text-brand"
          >
            <ArrowLeft className="h-4.5 w-4.5" strokeWidth={2} />
          </Link>
          <div>
            <h1 className="text-[16px] font-bold text-[#181826]">{code}</h1>
            <p className="text-[12.5px] text-[#8B8B96]">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-[12.5px] font-medium text-white">
          <Bell className="h-4 w-4 text-[#F4CB15]" strokeWidth={1.8} fill="#F4CB15" />
          <span>
            <span className="font-bold">{countdown}</span> until your exams
          </span>
          <Calendar className="h-4 w-4" strokeWidth={1.8} />
        </div>
      </div>
    </div>
  );
}
