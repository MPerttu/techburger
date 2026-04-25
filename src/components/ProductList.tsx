// 1. Määritellään tuotteet (Mock Data)
const products = [
  { id: 1, name: "Classic Tech", price: 12.90, desc: "A reliable beef burger for all systems." },
  { id: 2, name: "Binary Bacon", price: 14.50, desc: "Double bacon, double the logic." },
  { id: 3, name: "The Stack", price: 18.90, desc: "Triple patty - a real memory hog." },
  { id: 4, name: "Null Pointer", price: 11.00, desc: "Light vegan option, zero meat found." },
  { id: 5, name: "CSS Crispy", price: 13.50, desc: "Perfectly styled crispy chicken burger." }
];

export function ProductList() {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-8 text-slate-800 border-b-2 border-orange-500 inline-block">
        Our Menu
      </h2>
      
      {/* 2. Luodaan ruudukko (Grid) korteille */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* 3. TÄSSÄ ON .map() FUNKTIO */}
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-slate-800">{product.name}</h3>
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-bold">
                {product.price}€
              </span>
            </div>
            
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {product.desc}
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