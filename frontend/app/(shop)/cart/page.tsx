"use client";

import { CartContainer } from "@/app/components/cart/CartContainer";
import { Navbar } from "@/app/components/navbar/Navbar";

import { useBookStore } from "@/app/store/store";

export default function CartPage() {
  const booksInTheCart = useBookStore((state) => state.cart);
  console.log(booksInTheCart);

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>

        <div className="grid grid-cols-1 gap-6">
          <CartContainer productos={booksInTheCart} />
        </div>
      </div>
    </>
  );
}
