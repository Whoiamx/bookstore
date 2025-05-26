import { create } from "zustand";
import { Books } from "../interfaces/books";

interface StateStore {
  cart: Books[];
  addToCart: (book: Books) => void;
  deleteBookCart: (book: Books) => void;
}

export const useBookStore = create<StateStore>((set) => ({
  cart: [],
  addToCart: (book: Books) => {
    set((state) => {
      const existingBook = state.cart.find((item) => item.slug === book.slug);

      if (existingBook) {
        const updatedCart = state.cart.map((item) =>
          item.slug === book.slug
            ? { ...item, cantidad: (item.cantidad || 1) + 1 }
            : item
        );

        return { cart: updatedCart };
      } else {
        return { cart: [...state.cart, { ...book, cantidad: 1 }] };
      }
    });
  },

  deleteBookCart: (book: Books) => {
    set((state) => {
      const filterCart = state.cart.filter((item) => item.slug != book.slug);

      return { cart: filterCart };
    });
  },
}));
