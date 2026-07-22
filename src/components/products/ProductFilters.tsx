"use client";

import { Search } from "lucide-react";
import type { ProductCategory } from "@/lib/products";
import { productCategories } from "@/lib/products";

export default function ProductFilters({
  query,
  onQueryChange,
  activeCategory,
  onSelectCategory,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  activeCategory: ProductCategory | "all";
  onSelectCategory: (category: ProductCategory | "all") => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex w-64 items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 focus-within:border-brand/40">
        <Search className="h-4 w-4 shrink-0 text-[#9A9AA5]" strokeWidth={1.8} />
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search products"
          className="w-full bg-transparent text-[13px] text-[#181826] placeholder:text-[#9A9AA5] focus:outline-none"
        />
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        <button
          onClick={() => onSelectCategory("all")}
          className={`rounded-full border px-3 py-1.5 text-[12.5px] font-semibold transition-colors ${
            activeCategory === "all"
              ? "border-brand bg-brand text-white"
              : "border-black/10 bg-white text-[#5B5B68] hover:border-black/20"
          }`}
        >
          All
        </button>
        {productCategories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`rounded-full border px-3 py-1.5 text-[12.5px] font-semibold transition-colors ${
              activeCategory === category
                ? "border-brand bg-brand text-white"
                : "border-black/10 bg-white text-[#5B5B68] hover:border-black/20"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
