import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Graphic Design", "Motion Graphics", "Video Editing"];

const portfolioItems = [
  { title: "Brand Identity — Luxe Print Co.", category: "Graphic Design", color: "bg-gradient-blue" },
  { title: "Logo Animation — TechVista", category: "Motion Graphics", color: "bg-gradient-hero" },
  { title: "Corporate Video — Summit 2024", category: "Video Editing", color: "bg-brand-dark" },
  { title: "Packaging Design — FreshRoots", category: "Graphic Design", color: "bg-gradient-hero" },
  { title: "Explainer Video — FinFlow App", category: "Motion Graphics", color: "bg-gradient-blue" },
  { title: "Social Media Campaign — StyleHub", category: "Graphic Design", color: "bg-brand-dark" },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? portfolioItems : portfolioItems.filter((i) => i.category === active);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background" ref={ref}>
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
              <div className={`${item.color} rounded-2xl aspect-[4/3] p-8 flex flex-col justify-end relative overflow-hidden`}>
                {/* Decorative dot grid */}
                <div className="absolute top-4 right-4 grid grid-cols-3 gap-1 opacity-30">
                  {Array.from({ length: 9 }).map((_, j) => (
                    <div key={j} className="w-1.5 h-1.5 rounded-full bg-current" style={{ color: item.color.includes("hero") ? "hsl(var(--brand-dark))" : "white" }} />
                  ))}
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: item.color.includes("hero") ? "hsl(var(--brand-dark), 0.6)" : "rgba(255,255,255,0.6)" }}>
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold mt-1" style={{ color: item.color.includes("hero") ? "hsl(var(--brand-dark))" : "white" }}>
                    {item.title}
                  </h3>
                </div>
                <motion.div
                  className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-300 rounded-2xl flex items-center justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowRight className="w-8 h-8" style={{ color: "white" }} />
                  </motion.div>
                </motion.div>
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
          <button className="px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition-opacity shadow-card">
            Explore More Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
