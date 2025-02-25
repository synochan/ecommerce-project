import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import { ProductCarousel } from "./components/ProductCarousel";
import { PopularNow } from "./components/PopularNow";


function App() {

  return (  
    <>
    <NavBar />
    <main className="container mx-auto py-8">
      <ProductCarousel />
      <PopularNow />
    </main>
    <Footer />
    </>
  );
}

export default App;
