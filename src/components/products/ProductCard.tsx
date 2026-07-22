import { ShoppingCart, Star } from "lucide-react";
import type { Product } from "@/lib/products";
import { themeStyles } from "@/lib/courses";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm">
      <div
        className="diagonal-stripes relative flex h-28 items-center justify-center overflow-hidden"
        style={{ backgroundColor: themeStyles[product.theme].bg }}
      >
        <span className="select-none text-2xl font-extrabold tracking-wide text-white/95">
          {product.examType}
        </span>
        {product.badge && (
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-brand">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <span className="text-[10.5px] font-semibold uppercase tracking-wide text-[#8B8B96]">
          {product.category}
        </span>
        <h3 className="mt-1 text-[14px] font-bold text-[#181826]">{product.name}</h3>
        <div className="mt-1 flex items-center gap-1 text-[11.5px] text-[#8B8B96]">
          <Star className="h-3 w-3" strokeWidth={0} fill="#F4CB15" />
          {product.rating} ({product.reviews})
        </div>
        <p className="mt-2 line-clamp-2 flex-1 text-[12.5px] leading-relaxed text-[#5B5B68]">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-3">
          <span className="text-[15px] font-bold text-[#181826]">£{product.price.toFixed(2)}</span>
          <button className="flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-[12.5px] font-semibold text-white hover:opacity-90">
            <ShoppingCart className="h-3.5 w-3.5" strokeWidth={2} />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
