import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import brandIdentity from "@/assets/portfolio/brand-identity.jpg";
import logoAnimation from "@/assets/portfolio/logo-animation.jpg";
import corporateVideo from "@/assets/portfolio/corporate-video.jpg";
import packagingDesign from "@/assets/portfolio/packaging-design.jpg";
import explainerVideo from "@/assets/portfolio/explainer-video.jpg";
import socialCampaign from "@/assets/portfolio/social-campaign.jpg";

const categories = ["All", "Graphic Design", "Motion Graphics", "Video Editing"];

const portfolioItems = [
  { id: "luxe-print", title: "Brand Identity — Luxe Print Co.", category: "Graphic Design", image: brandIdentity },
  { id: "techvista-logo", title: "Logo Animation — TechVista", category: "Motion Graphics", image: logoAnimation },
  { id: "summit-2024", title: "Corporate Video — Summit 2024", category: "Video Editing", image: corporateVideo },
  { id: "freshroots-pkg", title: "Packaging Design — FreshRoots", category: "Graphic Design", image: packagingDesign },
  { id: "finflow-explainer", title: "Explainer Video — FinFlow App", category: "Motion Graphics", image: explainerVideo },
  { id: "stylehub-social", title: "Social Media Campaign — StyleHub", category: "Graphic Design", image: socialCampaign },
];

export { portfolioItems, categories };

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("All");
  const navigate = useNavigate();

  const filtered = active === "All" ? portfolioItems : portfolioItems.filter((i) => i.category === active);

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

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((cat) => (
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

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group cursor-pointer"
                onClick={() => navigate(`/portfolio/work/${item.id}`)}
              >
                <div className="rounded-2xl aspect-[4/3] relative overflow-hidden glass-shimmer" style={{ boxShadow: '0 8px 32px hsl(0 0% 0% / 0.15), inset 0 1px 0 hsl(0 0% 100% / 0.1)' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent backdrop-blur-[1px]" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md text-primary/90" style={{ background: 'hsl(0 0% 100% / 0.1)', backdropFilter: 'blur(8px)' }}>
                      {item.category}
                    </span>
                    <h3 className="text-sm sm:text-lg font-bold mt-1.5 text-white drop-shadow-sm">
                      {item.title}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
          {active !== "All" && (
            <button
              onClick={() => navigate(`/portfolio/${encodeURIComponent(active)}`)}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-brand-dark/20 text-foreground font-semibold hover:bg-muted transition-colors text-sm sm:text-base"
            >
              View All {active} →
            </button>
          )}
          <button
            onClick={() => navigate("/portfolio")}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition-opacity shadow-card text-sm sm:text-base"
          >
            Explore More Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
