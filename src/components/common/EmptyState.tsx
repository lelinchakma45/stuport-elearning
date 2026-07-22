import { SearchX } from "lucide-react";

export default function EmptyState({ message }: { message: string }) {
  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-black/10 bg-white px-6 py-10 text-center">
      <SearchX className="h-6 w-6 text-[#9A9AA5]" strokeWidth={1.6} />
      <p className="text-[13px] text-[#8B8B96]">{message}</p>
    </div>
  );
}
