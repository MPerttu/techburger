import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
