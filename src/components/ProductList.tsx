import { useState } from 'react';
import type { Product } from '../types'; 
import ProductCard from './ProductCard';

const products: Product[] = [
  { 
    id: 1, 
    name: "Classic Tech", 
    price: 12.90, 
    description: "A reliable beef burger for all systems.", 
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    category: "Burger",
    isVegan: false      
  },
  { 
    id: 2, 
    name: "Binary Bacon", 
    price: 14.50, 
    description: "Double bacon, double the logic.", 
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500",
    category: "Burger", 
    isVegan: false  
  },     
  { 
    id: 3, 
    name: "The Stack", 
    price: 18.90, 
    description: "Triple patty - a real memory hog.", 
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500",
    category: "Burger", 
    isVegan: false       
  },
  { 
    id: 4, 
    name: "Null Pointer", 
    price: 11.00, 
    description: "Light vegan option, zero meat found.", 
    image: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=500",
    category: "Burger",   
    isVegan: true        
  },
  { 
    id: 5, 
    name: "CSS Crispy", 
    price: 13.50, 
    description: "Perfectly styled crispy chicken burger.", 
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500",
    category: "Burger", 
    isVegan: false       
  }
];

export function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="max-w-6xl mx-auto p-6">
      <header className="flex justify-between items-center mb-8 border-b-2 border-orange-500 pb-4">
        <h2 className="text-2xl font-bold text-slate-800">
          Our Menu
        </h2>
        {selectedProduct && (
          <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-medium animate-pulse">
            Selected: {selectedProduct.name}
          </div>
        )}
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onSelect={setSelectedProduct} 
          />
        ))}
        
      </div>
    </section>
  );
}