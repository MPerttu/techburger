import { useCartStore } from "../store/useCartStore";

const Header = () => {
  // Haetaan VAIN cartItems-taulukko storesta
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="text-2xl font-bold italic text-black">TechBurger</div>

      <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
        <span className="text-xl">🛒</span>
        {/* Korvataan kovakoodattu '0' ostoskorin pituudella */}
        <span className="font-medium">{cartItems.length} tuotetta</span>
      </div>
    </header>
  );
};

export default Header;
