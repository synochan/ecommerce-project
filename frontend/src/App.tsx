import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/pages/Landing";
import Layout from "./pages/Layout/Layout";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { ProductProvider } from "./context/ProductContext";
import ProductView from "./components/ProductView";
import Navbar from "./pages/Layout/NavBar";
import Footer from "./pages/Layout/Footer";
import MenCategory from "./pages/pages/MenCategory";
import WomenCategory from "./pages/pages/WomenCategory";
import KidsCategory from "./pages/pages/KidsCategory";
import NewAndTrending from "./pages/pages/NewAndTrending";
import Cart from "./components/Cart"
import Checkout from "./components/Checkout";


function App() {
    return(
        <>
        
            <ProductProvider>

                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Layout />} />
                        <Route index element={<Landing />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/product-details/:id" element={<ProductView />} />
                        <Route path="/men" element={<MenCategory />}/>
                        <Route path="/women" element={<WomenCategory />}/>
                        <Route path="/kids" element={<KidsCategory />}/>
                        <Route path="/new-trending" element={<NewAndTrending />}/>
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                    <Footer />
                </Router>
            </ProductProvider>
        </>
    )
}

export default App;