import type { Product } from '../types';

interface Props {
  product: Product;
  // Lisätään uusi prop vaatimusten mukaisesti
  onSelect: (product: Product) => void;
}

const ProductCard = ({ product, onSelect }: Props) => {
  return (
    <div 
      // Lisätään onClick koko kortin ympärille
      onClick={() => onSelect(product)}
      style={{ 
        border: '1px solid #ccc', 
        padding: '1rem', 
        borderRadius: '8px',
        cursor: 'pointer'
      }}
    >
      <img src={product.image} alt={product.name} width="100%" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="font-bold text-lg">
        <strong>{product.price}€</strong>
      </p>
      <button 
        className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 border border-gray-300 rounded"
        onClick={(e) => e.stopPropagation()} 
      >
        Lisää ostoskoriin
      </button>
    </div>
  );
};

export default ProductCard;