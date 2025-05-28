import { create } from "zustand";
import { Books } from "../interfaces/books";

interface StateStore {
  cart: Books[];
  directionUser: {
    name: string;
    apellido: string;
    direction: string;
    ciudad: string;
    provincia: string;
    postal: number;
    telefono: number;
  };

  addToCart: (book: Books) => void;
  deleteBookCart: (book: Books) => void;
}

export const useBookStore = create<StateStore>((set) => ({
  cart: [],
  directionUser: {
    name: "",
    apellido: "",
    direction: "",
    ciudad: "",
    provincia: "",
    postal: 0,
    telefono: 0,
  },

  addToCart: (book: Books) => {
    set((state) => {
      const existingBook = state.cart.find((item) => item.slug === book.slug);

      const incomingCantidad = book.cantidad ?? 1;

      if (existingBook) {
        const updatedCart = state.cart.map((item) =>
          item.slug === book.slug
            ? { ...item, cantidad: (item.cantidad ?? 1) + incomingCantidad }
            : item
        );

        return { cart: updatedCart };
      } else {
        return {
          cart: [...state.cart, { ...book, cantidad: incomingCantidad }],
        };
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
