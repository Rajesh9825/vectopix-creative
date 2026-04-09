import { motion } from "framer-motion";
import { ArrowUpRight, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Subcategory } from "@/data/portfolioData";

interface Props {
  item: Subcategory;
  index: number;
  featured?: boolean;
}

const PortfolioShowcaseCard = ({ item, index, featured = false }: Props) => {
  const navigate = useNavigate();

  // Map subcategory icons to gradient backgrounds
  const gradients: Record<string, string> = {
    "Graphic Design": "from-primary/20 via-primary/5 to-transparent",
    "Motion Graphics": "from-secondary/20 via-secondary/5 to-transparent",
    "Video Editing": "from-accent/20 via-accent/5 to-transparent",
  };

  const gradient = gradients[item.category] || gradients["Graphic Design"];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={() => navigate(`/portfolio/subcategory/${item.id}`)}
      className={`group relative cursor-pointer flex-shrink-0 ${
        featured ? "w-[320px] sm:w-[380px]" : "w-[280px] sm:w-[320px]"
      }`}
    >
      <div
        className={`relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-elevated ${
          featured ? "h-[340px] sm:h-[400px]" : "h-[280px] sm:h-[320px]"
        }`}
      >
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Shimmer line on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8">
          {/* Top */}
          <div>
            <div className="flex items-start justify-between mb-6">
              <span className="text-3xl sm:text-4xl">{item.icon}</span>
              <motion.div
                className="w-10 h-10 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-primary group-hover:border-primary"
                whileHover={{ scale: 1.1 }}
              >
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </motion.div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
              {item.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-2 group-hover:text-foreground/70 transition-colors duration-300">
              {item.description}
            </p>
          </div>

          {/* Bottom stats */}
          <div className="flex items-center gap-3 pt-4 border-t border-border/50">
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs font-semibold text-muted-foreground">
                {item.workCount}+ Projects
              </span>
            </div>
            <span className="text-xs text-muted-foreground/50">•</span>
            <span className="text-xs text-muted-foreground font-medium">
              {item.category}
            </span>
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/15 group-hover:scale-150 transition-all duration-700" />
      </div>
    </motion.div>
  );
};

export default PortfolioShowcaseCard;
