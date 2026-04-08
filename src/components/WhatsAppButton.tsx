import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center hover:shadow-[0_6px_28px_rgba(37,211,102,0.55)] transition-shadow"
    >
      <MessageCircle className="w-6 h-6" fill="currentColor" />
    </motion.a>
  );
};

export default WhatsAppButton;
