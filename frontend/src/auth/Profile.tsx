import { LogOut, Settings, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  if (!isOpen) return null;

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
        <li className="flex items-center px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer">
          <LogOut className="w-5 h-5 mr-3" />
          <span>Logout</span>
        </li>
      </ul>
    </motion.div>
  );
}
