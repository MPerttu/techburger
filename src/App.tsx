import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
    

      <main className="p-8">
        <h2 className="text-xl text-slate-700">Welcome to TechBurger!</h2>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
