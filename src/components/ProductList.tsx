import { useState, useEffect } from "react";
import type { Product } from "../types";

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/menu.json")
      .then((response) => {
        if (!response.ok) throw new Error("Haku epäonnistui");
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Virhe:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500 mb-4"></div>
        <p className="text-xl font-semibold text-slate-600">
          Haetaan menuun päivityksiä... 🍔
        </p>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-8 text-slate-800 border-b-2 border-orange-500 inline-block">
        Our Menu
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-slate-800">
                {product.name}
              </h3>
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-bold">
                {product.price.toFixed(2)}€
              </span>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 active:scale-95 transition-all shadow-lg shadow-orange-200">
              Add to Order
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
