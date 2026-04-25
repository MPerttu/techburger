import { useState, useEffect } from "react";
import type { Product } from "../types";
import ProductCard from "./ProductCard"; // Kaverin lisäämä uusi komponentti

export function ProductList() {
  // --- TILAT (Kaverin versio + sinun fetch-data) ---
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // --- LOGIIKKA (Sinun dynaaminen haku + kaverin virhekäsittely) ---
  useEffect(() => {
    fetch("/data/menu.json")
      .then((response) => {
        if (!response.ok)
          throw new Error("Menun haku epäonnistui - tarkista yhteys");
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Jotain meni pieleen");
        setIsLoading(false);
      });
  }, []);

  // --- NÄKYMÄ: VIRHE (Kaverin tyylittely) ---
  if (error) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-red-50 text-red-600 p-8 rounded-2xl border border-red-100 text-center shadow-sm">
          <h2 className="text-xl font-bold mb-2 text-red-700">
            Ups! Virhe havaittu
          </h2>
          <p className="font-medium">{error}</p>
        </div>
      </div>
    );
  }

  // --- NÄKYMÄ: LATAUS (Kaverin hieno "Grilli kuumenee" animaatio) ---
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-125 gap-6">
        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        <h2 className="text-3xl font-bold text-slate-700 animate-pulse uppercase tracking-widest">
          Grilli kuumenee...
        </h2>
      </div>
    );
  }

  // --- NÄKYMÄ: PÄÄSIVU (Yhdistetty rakenne) ---
  return (
    <section className="max-w-6xl mx-auto p-6">
      <header className="flex justify-between items-center mb-8 border-b-2 border-orange-500 pb-4">
        <h2 className="text-2xl font-bold text-slate-800">Our Menu</h2>
        {selectedProduct && (
          <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-medium animate-bounce">
            Selected: {selectedProduct.name}
          </div>
        )}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          /* Käytetään kaverin tuomaa ProductCard-komponenttia, jos hän on sen jo luonut! */
          /* Jos ProductCard ei vielä toimi, voimme palata vanhaan div-rakenteeseen */
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>
    </section>
  );
}
