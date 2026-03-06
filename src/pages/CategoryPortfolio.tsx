import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { getSubcategoriesByCategory } from "@/data/portfolioData";
import SubcategoryCard from "@/components/SubcategoryCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CategoryPortfolio = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const decodedCategory = decodeURIComponent(category || "");
  const subs = getSubcategoriesByCategory(decodedCategory);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <div className="bg-gradient-hero pt-[clamp(5.5rem,14vw,7rem)] pb-[clamp(2.5rem,8vw,4rem)]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-brand-dark/70 hover:text-brand-dark mb-6 transition-colors font-medium text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <h1 className="text-[clamp(2.1rem,8vw,4.5rem)] font-bold text-brand-dark">
            {decodedCategory}
          </h1>
          <p className="mt-4 text-brand-dark/75 max-w-xl text-[clamp(1rem,2.8vw,1.125rem)]">
            Explore our complete collection of {decodedCategory.toLowerCase()} work — {subs.length} specialized subcategories.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-[clamp(2rem,6vw,3rem)]">
        {subs.length === 0 ? (
          <p className="text-center text-muted-foreground text-base sm:text-lg py-16 sm:py-20">
            No subcategories found. Check back soon!
          </p>
        ) : (
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            <AnimatePresence mode="popLayout">
              {subs.map((sub, i) => (
                <SubcategoryCard key={sub.id} item={sub} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPortfolio;
