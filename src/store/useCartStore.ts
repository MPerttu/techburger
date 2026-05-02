import { create } from "zustand";
import type { Product } from "../types";

interface CartState {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: [
    {
      id: 999,
      name: "Testi Burger",
      price: 10,
      image: "",
      category: "Burger",
      description: "Testikuvaus", // Lisätty
      isVegan: false, // Lisätty
    },
  ],

  addToCart: (product: Product) =>
    set((state) => ({ cartItems: [...state.cartItems, product] })),
  removeFromCart: (productId: number) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== productId),
    })),

  clearCart: () => set({ cartItems: [] }),
}));
