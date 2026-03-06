import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { categories, subcategories, getSubcategoriesByCategory } from "@/data/portfolioData";
import SubcategoryCard from "@/components/SubcategoryCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PortfolioPage = () => {
  const [active, setActive] = useState("All");
  const navigate = useNavigate();

  const visibleSubs =
    active === "All" ? subcategories : getSubcategoriesByCategory(active);

  // Group by category when showing "All"
  const groupedCategories = active === "All"
    ? categories.filter((c) => c !== "All")
    : [active];

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
          <h1 className="text-[clamp(2.2rem,9vw,4.5rem)] font-bold text-brand-dark">
            Our <span className="text-secondary">Portfolio</span>
          </h1>
          <p className="mt-4 text-brand-dark/75 max-w-xl text-[clamp(1rem,2.8vw,1.125rem)]">
            Explore our complete collection of design, motion, and video work crafted for brands worldwide.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-[clamp(2rem,6vw,3rem)]">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grouped subcategory sections */}
        {groupedCategories.map((cat) => {
          const subs = getSubcategoriesByCategory(cat);
          return (
            <div key={cat} className="mb-10 sm:mb-14 last:mb-0">
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">{cat}</h2>
                <span className="text-xs font-semibold bg-muted text-muted-foreground px-3 py-1 rounded-full">
                  {subs.length} subcategories
                </span>
              </div>
              <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                <AnimatePresence mode="popLayout">
                  {subs.map((sub, i) => (
                    <SubcategoryCard key={sub.id} item={sub} index={i} />
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
