import type { Metadata } from "next";
import CartBreadcrumb from "@/components/cart/CartBreadcrumb";
import CartContent from "@/components/cart/CartContent";

export const metadata: Metadata = {
  title: "Your cart | Study Mind",
};

export default function CartPage() {
  return (
    <>
      <CartBreadcrumb />
      <main className="mx-auto w-full max-w-[1440px] flex-1 px-10 py-6">
        <CartContent />
      </main>
    </>
  );
}
