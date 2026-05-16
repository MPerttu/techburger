import { create } from "zustand";
import type { Product } from "../types";

interface CartState {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],

  addToCart: (product: Product) =>
    set((state) => ({ cartItems: [...state.cartItems, product] })),

  removeFromCart: (index: number) =>
    set((state) => ({
      cartItems: state.cartItems.filter((_, itemIndex) => itemIndex !== index),
    })),

  clearCart: () => set({ cartItems: [] }),
}));
