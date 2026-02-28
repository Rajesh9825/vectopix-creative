import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioItems } from "@/components/PortfolioSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WorkDetail = () => {
  const { workId } = useParams<{ workId: string }>();
  const navigate = useNavigate();

  const item = portfolioItems.find((i) => i.id === workId);

  if (!item) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Work not found</h1>
          <button onClick={() => navigate("/portfolio")} className="text-primary font-semibold hover:underline">
            ← Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  // Related works in the same category
  const related = portfolioItems.filter((i) => i.category === item.category && i.id !== item.id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero image */}
      <div className="pt-16">
        <div className="relative w-full h-[50vh] md:h-[60vh]">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="container mx-auto">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{item.category}</span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mt-2">{item.title}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">About This Project</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This project was crafted with attention to detail and creative excellence. Our team worked closely with the client to deliver a result that aligns with their brand vision and business goals. From concept to final delivery, every element was carefully considered to ensure maximum impact.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-muted rounded-xl p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Category</p>
              <p className="text-foreground font-semibold">{item.category}</p>
            </div>
            <div className="bg-muted rounded-xl p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Client</p>
              <p className="text-foreground font-semibold">{item.title.split("—")[1]?.trim() || "Confidential"}</p>
            </div>
            <div className="bg-muted rounded-xl p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Year</p>
              <p className="text-foreground font-semibold">2024</p>
            </div>
          </div>
        </div>

        {/* Related work */}
        {related.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">More {item.category} Work</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/portfolio/work/${r.id}`)}
                >
                  <div className="rounded-2xl aspect-[4/3] relative overflow-hidden">
                    <img src={r.image} alt={r.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary/80">{r.category}</span>
                      <h4 className="text-base font-bold mt-1 text-white">{r.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default WorkDetail;
