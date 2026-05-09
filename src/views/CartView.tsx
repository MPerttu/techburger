import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

const CartView = () => {
  // Haetaan cartItems storesta
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Ostoskori</h1>

      {cartItems.length === 0 ? (
        <div className="bg-gray-100 p-10 rounded-lg text-center">
          <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
          {/* Back to Menu -linkki */}
          <Link 
            to="/" 
            className="text-blue-600 hover:underline font-medium"
          >
            ← Back to Menu
          </Link>
        </div>
      ) : (
        <div>
          {/* Tähän tulee myöhemmin korin tuotteet */}
          <p>Sinulla on {cartItems.length} tuotetta korissa.</p>
          <Link to="/" className="text-blue-600 hover:underline block mt-4">
            ← Jatka ostoksia
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartView;