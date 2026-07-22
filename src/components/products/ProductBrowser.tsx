"use client";

import { useMemo, useState } from "react";
import type { ProductCategory } from "@/lib/products";
import { products } from "@/lib/products";
import EmptyState from "@/components/common/EmptyState";
import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";

export default function ProductBrowser() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesQuery =
        q.length === 0 ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q);
      const matchesCategory = activeCategory === "all" || product.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

  return (
    <section className="mt-9">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-[15px] font-bold text-[#181826]">All products</h2>
        <ProductFilters
          query={query}
          onQueryChange={setQuery}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </div>

      {filteredProducts.length === 0 ? (
        <EmptyState message="No products match your search. Try a different keyword or category." />
      ) : (
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
