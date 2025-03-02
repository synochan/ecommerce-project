import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      {/* Animated 404 */}
      <motion.h1
        className="text-9xl font-extrabold text-black"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        404
      </motion.h1>

      {/* Subheading with fade-in effect */}
      <motion.h2
        className="text-3xl font-semibold mt-4 text-gray-800"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Oops! Page not found.
      </motion.h2>

      {/* Description text with a subtle delay */}
      <motion.p
        className="text-lg text-gray-600 mt-2 max-w-lg"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        The page you're looking for doesn't exist. It might have been moved or deleted.
      </motion.p>

      {/* Animated button */}
      <motion.button
        onClick={() => navigate("/")}
        className="mt-6 px-8 py-4 bg-black text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Go Home
      </motion.button>
    </div>
  );
}
