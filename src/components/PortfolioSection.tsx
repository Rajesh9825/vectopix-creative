import { motion, useInView } from "framer-motion";
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
  { title: "Brand Identity — Luxe Print Co.", category: "Graphic Design", image: brandIdentity },
  { title: "Logo Animation — TechVista", category: "Motion Graphics", image: logoAnimation },
  { title: "Corporate Video — Summit 2024", category: "Video Editing", image: corporateVideo },
  { title: "Packaging Design — FreshRoots", category: "Graphic Design", image: packagingDesign },
  { title: "Explainer Video — FinFlow App", category: "Motion Graphics", image: explainerVideo },
  { title: "Social Media Campaign — StyleHub", category: "Graphic Design", image: socialCampaign },
];

export { portfolioItems, categories };

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("All");
  const navigate = useNavigate();

  const filtered = active === "All" ? portfolioItems : portfolioItems.filter((i) => i.category === active);

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Featured <span className="text-gradient-yellow">Portfolio</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((item, i) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="rounded-2xl aspect-[4/3] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold mt-1 text-white">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => navigate("/portfolio")}
            className="px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition-opacity shadow-card"
          >
            Explore More Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
