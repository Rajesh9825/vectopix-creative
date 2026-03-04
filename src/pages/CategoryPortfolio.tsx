import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { portfolioItems } from "@/components/PortfolioSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CategoryPortfolio = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const decodedCategory = decodeURIComponent(category || "");
  const filtered = portfolioItems.filter((i) => i.category === decodedCategory);

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
            Explore our complete collection of {decodedCategory.toLowerCase()} work crafted for brands worldwide.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-[clamp(2rem,6vw,3rem)]">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground text-base sm:text-lg py-16 sm:py-20">
            No work found in this category yet. Check back soon!
          </p>
        ) : (
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group cursor-pointer"
                onClick={() => navigate(`/portfolio/work/${item.id}`)}
              >
                <div className="rounded-2xl aspect-[4/3] relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold mt-1 text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPortfolio;
