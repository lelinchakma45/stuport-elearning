"use client";

import { useState } from "react";
import { cartItems as initialCartItems } from "@/lib/cart";
import CartItemCard from "./CartItemCard";
import LiveDaysSection from "./LiveDaysSection";
import PopularForYouSection from "./PopularForYouSection";
import OrderSummary from "./OrderSummary";
import EmptyState from "@/components/common/EmptyState";

export default function CartContent() {
  const [items, setItems] = useState(initialCartItems);

  function removeItem(code: string) {
    setItems((prev) => prev.filter((item) => item.code !== code));
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
      <div>
        {items.length === 0 ? (
          <EmptyState message="Your cart is empty. Browse courses to add something." />
        ) : (
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <CartItemCard key={item.code} item={item} onRemove={() => removeItem(item.code)} />
            ))}
          </div>
        )}

        <LiveDaysSection />
        <PopularForYouSection />
      </div>

      <OrderSummary />
    </div>
  );
}
