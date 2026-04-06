import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioWork } from "@/data/portfolioData";

interface ImageLightboxProps {
  works: PortfolioWork[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const ImageLightbox = ({ works, currentIndex, isOpen, onClose }: ImageLightboxProps) => {
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex, isOpen]);

  const handlePrev = useCallback(() => {
    setIndex((i) => (i === 0 ? works.length - 1 : i - 1));
  }, [works.length]);

  const handleNext = useCallback(() => {
    setIndex((i) => (i === works.length - 1 ? 0 : i + 1));
  }, [works.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, handlePrev, handleNext, onClose]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen || works.length === 0) return null;

  const current = works[index];
  // Build the list of all images to show vertically
  const allImages = current.galleryImages && current.galleryImages.length > 0
    ? current.galleryImages
    : [current.image, ...(current.hoverImage ? [current.hoverImage] : [])];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col"
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose} />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-black/60 border-b border-white/10">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white/90">{current.title}</p>
            <p className="text-xs text-white/50 mt-0.5">{index + 1} / {works.length} &middot; {allImages.length} images</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors" title="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Vertical scroll gallery */}
        <div className="relative z-10 flex-1 overflow-y-auto">
          <div className="flex flex-col items-center gap-6 py-8 px-4 max-w-4xl mx-auto">
            {allImages.map((src, i) => (
              <motion.div
                key={`${current.id}-img-${i}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-full"
              >
                <div className="text-xs text-white/40 uppercase tracking-widest mb-3 font-medium">
                  {i === 0 ? "Design" : i === 1 ? "Mockup" : `View ${i + 1}`}
                </div>
                <img
                  src={src}
                  alt={`${current.title} — view ${i + 1}`}
                  className="w-full rounded-xl shadow-2xl border border-white/10 object-contain max-h-[75vh]"
                />
                {i < allImages.length - 1 && (
                  <div className="w-16 h-px bg-white/20 mx-auto mt-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Nav arrows */}
        {works.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="fixed left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={handleNext}
              className="fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </>
        )}

        {/* Thumbnail strip */}
        {works.length > 1 && (
          <div className="relative z-10 px-4 py-3 bg-black/60 border-t border-white/10">
            <div className="flex items-center justify-center gap-2 overflow-x-auto max-w-3xl mx-auto">
              {works.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => setIndex(i)}
                  className={`flex-shrink-0 w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    i === index ? "border-primary ring-1 ring-primary/50 scale-105" : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageLightbox;
