"use client";
import { useBookStore } from "../store/store";

export const LabelCounter = () => {
  const lengthCart = useBookStore((state) => state.cart);
  return (
    <>
      <p className="bg-blue-200 w-6 p-1.5 rounded-2xl  text-center text-lg font-extrabold">
        {lengthCart.length}
      </p>
    </>
  );
};
