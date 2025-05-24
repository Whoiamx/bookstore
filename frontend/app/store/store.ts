import { create } from "zustand";

const useBookStore = create((set) => ({
  cart: [],
}));
