import { XCircle } from "lucide-react";
import type { CartItem } from "@/lib/cart";
import { themeStyles } from "@/lib/courses";
import { StatsRow } from "@/components/common/CourseCard";

export default function CartItemCard({
  item,
  onRemove,
}: {
  item: CartItem;
  onRemove?: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-black/5 bg-white p-4 shadow-sm sm:flex-row">
      <div
        className="diagonal-stripes flex h-[100px] w-full shrink-0 items-center justify-center overflow-hidden rounded-lg sm:w-[150px]"
        style={{ backgroundColor: themeStyles[item.theme].bg }}
      >
        <span className="select-none text-xl font-extrabold tracking-wide text-white/95">
          {item.code}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[15px] font-bold text-[#181826]">{item.name}</h3>
            <p className="mt-1 line-clamp-2 max-w-md text-[13px] text-[#8B8B96]">
              {item.description}
            </p>
          </div>
          <span className="shrink-0 text-[15px] font-bold text-[#181826]">
            £{item.price.toFixed(2)}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <StatsRow
            hours={item.hours}
            lessons={item.lessons}
            enrolled={item.enrolled}
            bordered={false}
          />
          <button
            onClick={onRemove}
            className="flex items-center gap-1 text-[12.5px] font-medium text-[#D2454F] hover:underline"
          >
            <XCircle className="h-3.5 w-3.5" strokeWidth={1.8} />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
