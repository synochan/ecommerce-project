import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

// Random witty loading messages
const loadingMessages = [
  "Brewing coffee... ☕",
  "Summoning the shopping spirits... 🛍️",
  "Counting pixels... 🎨",
  "Loading... because magic takes time ✨",
  "Giving hamsters a break... 🐹",
  "Assembling the shopping cart... 🛒",
  "Negotiating with the server... 🤝",
  "Dusting off the database... 🧹",
  "Fetching the goods... almost there! 🚀"
];

export function Preloader({ onComplete }: PreloaderProps) {
  const [visible, setVisible] = useState(true);
  const [randomMessage, setRandomMessage] = useState("");

  useEffect(() => {
    // Pick a random loading message
    setRandomMessage(loadingMessages[Math.floor(Math.random() * loadingMessages.length)]);

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 500); // Delay hiding for smooth animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* Spinning Loader */}
          <motion.div
            className="w-16 h-16 border-4 border-gray-300 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
          
          {/* Random Witty Text */}
          <p className="mt-4 text-lg font-semibold">{randomMessage}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
