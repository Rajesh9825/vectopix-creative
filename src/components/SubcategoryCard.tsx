import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Subcategory } from "@/data/portfolioData";

interface SubcategoryCardProps {
  item: Subcategory;
  index: number;
}

const SubcategoryCard = ({ item, index }: SubcategoryCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group cursor-pointer"
      onClick={() => navigate(`/portfolio/subcategory/${item.id}`)}
    >
      <div className="relative rounded-2xl border border-border bg-card p-5 sm:p-6 h-full flex flex-col justify-between gap-4 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/40 hover:-translate-y-1">
        {/* Decorative gradient blob */}
        <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-150" />

        <div className="relative z-10">
          <span className="text-2xl sm:text-3xl mb-3 block">{item.icon}</span>
          <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
            {item.name}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <span className="text-xs font-semibold text-muted-foreground">
            {item.workCount}+ Projects
          </span>
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SubcategoryCard;
