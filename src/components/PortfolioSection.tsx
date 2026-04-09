import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { categories, getSubcategoriesByCategory } from "@/data/portfolioData";
import PortfolioShowcaseCard from "./PortfolioShowcaseCard";

// Re-export for backward compat
export { portfolioItems, categories } from "@/data/portfolioData";

const mainCategories = categories.filter((c) => c !== "All");

const PortfolioSection = () => {
  const ref = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(mainCategories[0]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const navigate = useNavigate();

  const visibleSubs = getSubcategoriesByCategory(active);

  const checkScrollability = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    // Reset scroll position on category change
    el.scrollTo({ left: 0, behavior: "smooth" });
    setTimeout(checkScrollability, 400);
  }, [active]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScrollability, { passive: true });
    checkScrollability();
    return () => el.removeEventListener("scroll", checkScrollability);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const amount = direction === "left" ? -360 : 360;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="section-padding bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
            Our Work
          </span>
          <h2 className="fluid-heading font-bold mt-3 text-foreground">
            Featured <span className="text-gradient-yellow">Portfolio</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm sm:text-base">
            Explore our curated collection of creative work across design, motion & video
          </p>
        </motion.div>

        {/* Category Tabs with animated underline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center mb-10 sm:mb-14"
        >
          <div className="relative inline-flex items-center gap-1 sm:gap-2 p-1.5 rounded-2xl bg-muted/50 backdrop-blur-sm border border-border">
            {mainCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-300 z-10"
              >
                {active === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl bg-secondary shadow-card"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    active === cat
                      ? "text-secondary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Showcase Carousel */}
        <div className="relative">
          {/* Scroll fade edges */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
              canScrollLeft ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            className={`absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
              canScrollRight ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Navigation arrows */}
          <AnimatePresence>
            {canScrollLeft && (
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                onClick={() => scroll("left")}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border border-border shadow-elevated flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {canScrollRight && (
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onClick={() => scroll("right")}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border border-border shadow-elevated flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Scrollable cards */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 px-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <AnimatePresence mode="popLayout">
              {visibleSubs.map((sub, i) => (
                <PortfolioShowcaseCard
                  key={sub.id}
                  item={sub}
                  index={i}
                  featured={i === 0 || i === 3}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-10 sm:mt-14"
        >
          <button
            onClick={() => navigate("/portfolio")}
            className="group/btn inline-flex items-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition-all duration-300 shadow-card text-sm sm:text-base"
          >
            Explore All Work
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
