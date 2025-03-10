import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/pages/Landing";
import Layout from "./pages/Layout/Layout";
import Login from "./auth/Login";
import Register from "./auth/Register";



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