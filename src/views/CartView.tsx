import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";

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
          <Link to="/" className="text-blue-600 hover:underline font-medium">
            ← Back to Menu
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {cartItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex items-center gap-4 p-4 border-b border-gray-100"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />

              <div className="flex-grow">
                <h2 className="font-bold text-slate-800">{item.name}</h2>
              </div>

              <p className="font-bold text-orange-500">
                {item.price.toFixed(2)} €
              </p>
            </div>
          ))}

          <Link to="/" className="text-blue-600 hover:underline block p-4">
            ← Jatka ostoksia
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartView;
