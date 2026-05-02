import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="px-8 py-6">
        <ProductList />
      </main>

      <Footer />
    </div>
  );
}

export default App;
