import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";



function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route index element={<Landing />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default App;