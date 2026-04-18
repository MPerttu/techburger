import type { Product } from '../types';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <img src={product.image} alt={product.name} width="100%" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="font-bold text-lg"
      ><strong>{product.price}€</strong></p>
      <button 
      className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 border border-gray-300 rounded">
        Lisää ostoskoriin
      </button>
    </div>
  );
};

export default ProductCard;