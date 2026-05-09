import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeView } from "./views/HomeView";
import CartView from "./views/CartView"; 

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      {/* Huom: main-tagi on jo HomeView- ja CartView-komponenteissa, 
          joten tässä se toimii vain reittien säiliönä */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;