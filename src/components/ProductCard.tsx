import { Product } from '../types';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <img src={product.image} alt={product.name} width="100%" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>{product.price}€</strong></p>
      <button>Lisää ostoskoriin</button>
    </div>
  );
};

export default ProductCard;