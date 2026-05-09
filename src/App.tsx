import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { ProductList } from "./components/ProductList";
import CartView from "./views/CartView"; 

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="px-8 py-6">
        <Routes>
          {/* Etusivun reitti */}
          <Route path="/" element={<ProductList />} />
          
          {/* 2. Lisätään uusi reitti ostoskorille */}
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;