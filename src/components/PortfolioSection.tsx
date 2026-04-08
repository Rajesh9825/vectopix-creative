import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories, subcategories, getSubcategoriesByCategory } from "@/data/portfolioData";
import SubcategoryCard from "./SubcategoryCard";

// Re-export for backward compat
export { portfolioItems, categories } from "@/data/portfolioData";

const mainCategories = categories.filter((c) => c !== "All");

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(mainCategories[0]);
  const navigate = useNavigate();

  const visibleSubs = getSubcategoriesByCategory(active);

  return (
    <section id="portfolio" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Our Work</span>
          <h2 className="fluid-heading font-bold mt-3 text-foreground">
            Featured <span className="text-gradient-yellow">Portfolio</span>
          </h2>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {mainCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Subcategory cards */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {visibleSubs.map((sub, i) => (
              <SubcategoryCard key={sub.id} item={sub} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
          <button
            onClick={() => navigate("/portfolio")}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition-opacity shadow-card text-sm sm:text-base"
          >
            Explore All Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
