import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="p-8">
        {/* Tänne tulee myöhemmin tuotelistaus */}
        <h2 className="text-xl text-slate-700">Welcome to TechBurger!</h2>
      </main>
      <Footer />
    </div>
  );
}

export default App;
