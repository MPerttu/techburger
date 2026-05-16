import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";

const CartView = () => {
  // Haetaan cartItems storesta
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Ostoskori</h1>

      {cartItems.length === 0 ? (
        <div className="bg-gray-100 p-10 rounded-lg text-center">
          <p className="text-xl text-gray-600 mb-4">Ostoskorisi on tyhjä</p>
          {/* Back to Menu -linkki */}
          <Link to="/" className="text-blue-600 hover:underline font-medium">
            ← Takaisin valikkoon
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
              <button
                onClick={() => removeFromCart(index)}
                className="text-gray-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors"
                title="Poista tuote"
              >
                🗑️
              </button>
            </div>
          ))}

          <Link to="/" className="text-blue-600 hover:underline block p-4">
            ← Jatka ostoksia
          </Link>

          <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xl font-bold text-slate-800">Yhteensä:</p>
              <p className="text-2xl font-bold text-orange-500">
                {totalPrice.toFixed(2)} €
              </p>
            </div>

            <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors">
              Siirry kassalle
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartView;
