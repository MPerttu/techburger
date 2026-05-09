import { Link } from 'react-router-dom';
import { useCartStore } from "../store/useCartStore";

const Header = () => {

  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      <Link to="/" className="text-2xl font-bold italic text-black hover:opacity-80">
        TechBurger
      </Link>

      <Link to="/cart" className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
        <span className="text-xl">🛒</span>
        <span className="font-medium text-black">{cartItems.length} tuotetta</span>
      </Link>
    </header>
  );
};

export default Header;