import type { Product } from "../types";

function getCategoryLabel(category: string) {
  switch (category.toLowerCase()) {
    case "burgers":
      return "Burgerit";
    case "sides":
      return "Lisukkeet";
    case "drinks":
      return "Juomat";
    default:
      return category;
  }
}

interface Props {
  product: Product;
  onClick: () => void; // Lisätty tämä rivi tyyppimäärittelyyn
}

export default function ProductCard({ product, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
    >
      {/* Tuotteen kuva, jos sellainen on datassa */}
      {product.image && (
        <div className="mb-4 overflow-hidden rounded-2xl h-48">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-slate-800">{product.name}</h3>
        <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">
          {product.price.toFixed(2)}€
        </span>
      </div>

      <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
        {product.description}
      </p>

      <div className="flex gap-2 items-center">
        {product.isVegan && (
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md font-medium">
            Vegaaninen
          </span>
        )}
        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-medium">
          {getCategoryLabel(product.category)}
        </span>
      </div>

      <button
        className="w-full mt-6 bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 active:scale-95 transition-all shadow-lg shadow-orange-200"
        onClick={(e) => {
          e.stopPropagation(); // Estää onClickin laukeamisen kahdesti jos nappia painetaan
          onClick();
        }}
      >
        Näytä tiedot
      </button>
    </div>
  );
}
