import { Info } from "lucide-react";

export default function InfoLink({ label = "Why I need this?" }: { label?: string }) {
  return (
    <a
      href="#"
      className="flex shrink-0 items-center gap-1.5 text-[12.5px] font-medium text-brand hover:underline"
    >
      <Info className="h-3.5 w-3.5" strokeWidth={1.8} />
      {label}
    </a>
  );
}
