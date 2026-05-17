import { create } from "zustand";
import type { Product } from "../types";

interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    const { products } = get();

    if (products.length > 0) {
      return;
    }

    set({ isLoading: true, error: null });

    try {
      const response = await fetch(
        "https://techburger-api.onrender.com/api/products",
      );

      if (!response.ok) {
        throw new Error("Menun haku epäonnistui - tarkista yhteys");
      }

      const data: Product[] = await response.json();

      set({
        products: data,
        isLoading: false,
        error: null,
      });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "Jotain meni pieleen",
        isLoading: false,
      });
    }
  },
}));
