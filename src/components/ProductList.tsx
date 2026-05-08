import { useState, useEffect } from "react";
import type { Product } from "../types";
import ProductCard from "./ProductCard";
import { Modal } from "./Modal";

export function ProductList() {
  // --- TILAT ---
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // --- LOGIIKKA: Datan haku ---
  useEffect(() => {
    fetch("https://techburger-api.onrender.com/api/products")
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

  // --- SUODATUSLOGIIKKA ---
  // Lasketaan näytettävät tuotteet valitun kategorian perusteella
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter(
          (p) => p.category.toLowerCase() === activeCategory.toLowerCase(),
        );

  // --- NÄKYMÄ: VIRHE ---
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

  // --- NÄKYMÄ: LATAUS ---
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

  // --- NÄKYMÄ: PÄÄSIVU ---
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

      {/* Kategoriapainikkeiden rivi */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {["all", "burgers", "sides", "drinks"].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-bold whitespace-nowrap transition-all ${
              activeCategory === category
                ? "bg-orange-500 text-white shadow-md" // Aktiivinen tyyli
                : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50" // Epäaktiivinen tyyli
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Tuoteruudukko - käyttää nyt filteredProducts-muuttujaa */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {/* Tuote-Modal */}
      {selectedProduct && (
        <Modal onClose={() => setSelectedProduct(null)}>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="h-64 w-full object-cover rounded-t-2xl"
          />

          <div className="p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-3xl font-bold text-slate-800">
                {selectedProduct.name}
              </h2>

              <p className="text-2xl font-bold text-orange-500">
                {selectedProduct.price.toFixed(2)} €
              </p>
            </div>

            <p className="mt-4 text-slate-600">{selectedProduct.description}</p>

            <button className="mt-6 w-full rounded-xl bg-orange-500 px-6 py-4 text-lg font-bold text-white hover:bg-orange-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
}
