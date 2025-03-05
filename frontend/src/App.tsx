import {useState} from "react";
import { NavBar } from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import { LandingPage } from "@/pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "@/pages/ProductsPage";
import { ProductView } from "@/components/product/ProductView";
import { NotFound } from "@/pages/NotFound";
import { Preloader } from "@/components/ui/Preloader"; 

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} /> 
      ) : (
        <>
          <NavBar />
          <main className="container mx-auto py-8">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:productId" element={<ProductView />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

