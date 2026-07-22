import type { Metadata } from "next";
import ProductsHero from "@/components/products/ProductsHero";
import ProductBrowser from "@/components/products/ProductBrowser";

export const metadata: Metadata = {
  title: "Products | Study Mind",
};

export default function ProductsPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] flex-1 px-10 py-6">
      <ProductsHero />
      <ProductBrowser />
    </main>
  );
}
