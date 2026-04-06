import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

interface ImageLightboxProps {
  images: { id: string; title: string; image: string; hoverImage?: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const ImageLightbox = ({ images, currentIndex, isOpen, onClose }: ImageLightboxProps) => {
  const [index, setIndex] = useState(currentIndex);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIndex(currentIndex);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [currentIndex, isOpen]);

  const handlePrev = useCallback(() => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [images.length]);

  const handleNext = useCallback(() => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [images.length]);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.5, 4));
  const handleZoomOut = () => {
    setZoom((z) => {
      const newZ = Math.max(z - 0.5, 1);
      if (newZ === 1) setPosition({ x: 0, y: 0 });
      return newZ;
    });
  };
  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "+" || e.key === "=") handleZoomIn();
      if (e.key === "-") handleZoomOut();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, handlePrev, handleNext, onClose]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen || images.length === 0) return null;

  const current = images[index];
  const hasHoverImage = !!current.hoverImage;

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
            <p className="text-xs text-white/50">{index + 1} / {images.length}</p>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 ml-4">
            {!hasHoverImage && (
              <>
                <button onClick={handleZoomOut} className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors" title="Zoom Out">
                  <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <span className="text-xs text-white/50 min-w-[3rem] text-center">{Math.round(zoom * 100)}%</span>
                <button onClick={handleZoomIn} className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors" title="Zoom In">
                  <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button onClick={handleReset} className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors" title="Reset">
                  <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <div className="w-px h-6 bg-white/20 mx-1" />
              </>
            )}
            <button onClick={onClose} className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors" title="Close">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content area */}
        {hasHoverImage ? (
          /* Vertical scroll view showing both images */
          <div className="relative z-10 flex-1 overflow-y-auto">
            <div className="flex flex-col items-center gap-6 py-8 px-4 max-w-4xl mx-auto">
              <motion.div
                key={`${current.id}-main`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="text-xs text-white/40 uppercase tracking-widest mb-3 font-medium">Design</div>
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full rounded-xl shadow-2xl border border-white/10 object-contain max-h-[70vh]"
                />
              </motion.div>
              <div className="w-16 h-px bg-white/20" />
              <motion.div
                key={`${current.id}-hover`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="w-full"
              >
                <div className="text-xs text-white/40 uppercase tracking-widest mb-3 font-medium">Mockup</div>
                <img
                  src={current.hoverImage}
                  alt={`${current.title} — mockup`}
                  className="w-full rounded-xl shadow-2xl border border-white/10 object-contain max-h-[70vh]"
                />
              </motion.div>
            </div>
          </div>
        ) : (
          /* Single image zoom view */
          <div
            className="relative z-10 flex-1 flex items-center justify-center overflow-hidden select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default" }}
          >
            <motion.img
              key={current.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={current.image}
              alt={current.title}
              className="max-w-[90vw] max-h-[75vh] object-contain rounded-lg shadow-2xl"
              style={{
                transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                transition: isDragging ? "none" : "transform 0.3s ease",
              }}
              draggable={false}
            />
          </div>
        )}

        {/* Nav arrows */}
        {images.length > 1 && (
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
        {images.length > 1 && (
          <div className="relative z-10 px-4 py-3 bg-black/60 border-t border-white/10">
            <div className="flex items-center justify-center gap-2 overflow-x-auto max-w-3xl mx-auto">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => { setIndex(i); setZoom(1); setPosition({ x: 0, y: 0 }); }}
                  className={`flex-shrink-0 w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    i === index ? "border-primary ring-1 ring-primary/50 scale-105" : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <img src={img.image} alt={img.title} className="w-full h-full object-cover" />
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
