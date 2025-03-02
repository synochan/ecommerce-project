import { NavBar } from "../components/NavBar";
import Footer from "../components/Footer";
import { LandingPage } from "@/pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "@/pages/ProductsPage";
import { ProductView } from "@/components/ProductView";

function App() {

  return (  
    <>
    <NavBar />
    <main className="container mx-auto py-8">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:productId" element={<ProductView />} />
      </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;
