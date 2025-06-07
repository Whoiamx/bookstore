import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Books, DirectionUser } from "../interfaces/books";

interface StateStore {
  cart: Books[];
  directionUser: DirectionUser;
  addToCart: (book: Books) => void;
  deleteBookCart: (book: Books) => void;
  addAddressUser: (data: DirectionUser) => void;
}

export const useBookStore = create<StateStore>()(
  persist(
    (set) => ({
      cart: [],
      directionUser: {
        nombre: "",
        apellido: "",
        direccion: "",
        ciudad: "",
        provincia: "",
        codigoPostal: "",
        telefono: "",
        email: "",
      },

      addToCart: (book: Books) => {
        set((state) => {
          const existingBook = state.cart.find(
            (item) => item.slug === book.slug
          );
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
          const filterCart = state.cart.filter(
            (item) => item.slug !== book.slug
          );
          return { cart: filterCart };
        });
      },

      addAddressUser: (data: DirectionUser) => {
        set((state) => ({
          ...state,
          directionUser: data,
        }));
      },
    }),

    {
      name: "book-store",
      partialize: (state) => ({
        cart: state.cart,
        directionUser: state.directionUser,
      }),
    }
  )
);
