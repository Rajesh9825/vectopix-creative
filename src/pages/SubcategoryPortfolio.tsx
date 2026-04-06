import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ImageIcon } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { getSubcategoryById, getWorkBySubcategory } from "@/data/portfolioData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import InlineVideoCard from "@/components/InlineVideoCard";

const SubcategoryPortfolio = () => {
  const { subcategoryId } = useParams<{ subcategoryId: string }>();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const sub = getSubcategoryById(subcategoryId || "");
  const works = getWorkBySubcategory(subcategoryId || "");

  const isVideoCategory = sub?.category === "Motion Graphics" || sub?.category === "Video Editing";

  if (!sub) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Category not found</h1>
          <button onClick={() => navigate("/portfolio")} className="text-primary font-semibold hover:underline">
            ← Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <div className="bg-gradient-hero pt-[clamp(5.5rem,14vw,7rem)] pb-[clamp(2.5rem,8vw,4rem)]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-brand-dark/70 hover:text-brand-dark mb-6 transition-colors font-medium text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl sm:text-4xl">{sub.icon}</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              {sub.category}
            </span>
          </div>

          <h1 className="text-[clamp(2.1rem,8vw,4.5rem)] font-bold text-brand-dark">
            {sub.name}
          </h1>
          <p className="mt-4 text-brand-dark/75 max-w-xl text-[clamp(1rem,2.8vw,1.125rem)]">
            {sub.description}
          </p>
          <p className="mt-2 text-brand-dark/50 text-sm">
            {works.length} {isVideoCategory ? "videos" : "designs"} in this collection
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-[clamp(2rem,6vw,3rem)]">
        {works.length === 0 ? (
          <div className="text-center py-16 sm:py-24">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <ImageIcon className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              Work samples coming soon
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
              We're curating our best {sub.name.toLowerCase()} projects. Check back soon!
            </p>
            <button
              onClick={() => navigate("/portfolio")}
              className="mt-6 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm"
            >
              Browse Other Categories
            </button>
          </div>
        ) : isVideoCategory ? (
          /* Video cards - play inline */
          <motion.div layout className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {works.map((item, i) => (
              <InlineVideoCard
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                videoUrl={item.videoUrl}
                index={i}
              />
            ))}
          </motion.div>
        ) : (
          /* Image cards - flip to reveal hover image */
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {works.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group cursor-pointer"
                style={{ perspective: "1200px" }}
                onClick={() => handleImageClick(i)}
              >
                <div className="relative w-full rounded-2xl aspect-[4/3] overflow-hidden border border-border shadow-sm hover:shadow-xl"
                  style={{
                    transformStyle: "preserve-3d",
                    transition: "transform 0.7s ease-in-out, box-shadow 0.5s ease",
                  }}
                >
                  <style>{`
                    .group:hover .flip-inner { transform: rotateY(180deg) !important; }
                  `}</style>
                  {/* Front face - main design */}
                  <div className="absolute inset-0 [backface-visibility:hidden]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Back face - mockup/alternate image */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <img
                      src={item.hoverImage || item.image}
                      alt={`${item.title} — alternate view`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        images={works.filter((w) => w.type === "image")}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default SubcategoryPortfolio;
