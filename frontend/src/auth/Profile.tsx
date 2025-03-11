import { LogOut, Settings, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
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
  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem(REFRESH_TOKEN);
  
      if (!refreshToken) {
        console.warn("No refresh token found, redirecting to login.");
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        navigate("/login");
        return;
      }
  
      // Send ONLY the refresh token, without Authorization header
      await api.post("/api/logout/", { refresh: refreshToken });
  
      // Clear tokens after successful logout
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);
      console.log("Logout successful!");
  
      navigate("/login");
    } catch (error) {
      console.error("Failed to logout");
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
        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <Settings className="w-5 h-5 mr-3 text-gray-700" />
          <span>Settings</span>
        </li>
        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <ShoppingCart className="w-5 h-5 mr-3 text-gray-700" />
          <span>Cart</span>
        </li>
        <li className="flex items-center px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>
          <LogOut className="w-5 h-5 mr-3" />
          <span>Logout</span>
        </li>
      </ul>
    </motion.div>
  );
}
