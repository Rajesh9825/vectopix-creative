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
  const relatedItems = portfolioItems.filter((i) => i.category === item?.category && i.id !== workId);

  if (!item) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Work not found</h1>
          <button onClick={() => navigate("/portfolio")} className="text-primary hover:underline">
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="pt-20">
        <div className="container mx-auto px-4 md:px-8 py-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>

        <div className="w-full aspect-[16/7] relative overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-8 -mt-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">{item.category}</span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-2">{item.title}</h1>

            <div className="mt-8 grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold text-foreground mb-4">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This project showcases our expertise in {item.category.toLowerCase()}. We worked closely with the client to deliver a cohesive visual identity that aligns with their brand values and resonates with their target audience.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  From initial concept to final delivery, every detail was carefully crafted to ensure the highest quality output that exceeds industry standards.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The project involved extensive research, multiple iterations, and close collaboration to achieve the perfect result.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Project Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-muted-foreground">Category</span>
                    <p className="font-medium text-foreground">{item.category}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Client</span>
                    <p className="font-medium text-foreground">{item.title.split("—")[1]?.trim() || "Confidential"}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Year</span>
                    <p className="font-medium text-foreground">2024</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Related Work */}
          {relatedItems.length > 0 && (
            <div className="mt-16 mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Related Work</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedItems.map((related, i) => (
                  <motion.div
                    key={related.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => navigate(`/portfolio/work/${related.id}`)}
                  >
                    <div className="rounded-2xl aspect-[4/3] relative overflow-hidden">
                      <img src={related.image} alt={related.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-base font-bold text-white">{related.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WorkDetail;
