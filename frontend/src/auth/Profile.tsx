import { LogOut, Settings, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import api from "@/api/api";
import { useNavigate } from "react-router-dom";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "@/api/constants";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  if (!isOpen) return null;

  const navigate = useNavigate();
  const isAuthenticated = Boolean(localStorage.getItem(ACCESS_TOKEN));

  const handleAuthAction = async () => {
    if (isAuthenticated) {
      try {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);

        if (!refreshToken) {
          console.warn("No refresh token found, redirecting to landing page.");
          localStorage.removeItem(ACCESS_TOKEN);
          localStorage.removeItem(REFRESH_TOKEN);
          navigate("/"); // Redirect to landing page
          return;
        }

        await api.post("/api/logout/", { refresh: refreshToken });

        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        console.log("Logout successful!");
        navigate("/"); // Redirect to landing page after logout
      } catch (error) {
        console.error("Failed to logout");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50"
    >
      <ul className="py-2">
        <li
          onClick={() => {
            navigate("/settings");
            onClose();
          }}
          className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          <Settings className="w-5 h-5 mr-3 text-gray-700" />
          <span>Settings</span>
        </li>
        <li
          onClick={() => {
            navigate("/cart");
            onClose();
          }}
          className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          <ShoppingCart className="w-5 h-5 mr-3 text-gray-700" />
          <span>Cart</span>
        </li>
        <li
          onClick={handleAuthAction}
          className={`flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer ${
            isAuthenticated ? "text-red-600" : "text-blue-600"
          }`}
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span>{isAuthenticated ? "Logout" : "Login"}</span>
        </li>
      </ul>
    </motion.div>
  );
}
