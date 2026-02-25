import { motion } from "framer-motion";
import logoBlack from "@/assets/logo-black.png";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-brand-blue/10 blur-2xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-brand-dark/5 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-brand-dark/30" />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-brand-dark/20" />

      {/* Geometric shapes inspired by Marathi poster art */}
      <div className="absolute top-10 left-10 w-20 h-20 border-4 border-brand-dark/10 rounded-full" />
      <div className="absolute bottom-32 right-20 w-16 h-16 border-4 border-brand-dark/10 rotate-45" />

      <div className="container mx-auto px-4 md:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-dark/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-dark" />
              <span className="text-sm font-semibold text-brand-dark tracking-wide">Graphic Design & Printing Services</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-brand-dark leading-tight mb-6">
              Design.
              <br />
              <span className="text-secondary">Motion.</span>
              <br />
              Impact.
            </h1>

            <p className="text-lg text-brand-dark/70 max-w-md mb-8 leading-relaxed">
              Professional graphic design, motion graphics & video editing solutions crafted for brands that demand excellence.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#portfolio")}
                className="px-8 py-4 rounded-xl bg-brand-dark text-primary font-semibold text-base hover:bg-brand-dark/90 transition-colors shadow-elevated"
              >
                Explore Our Work
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="px-8 py-4 rounded-xl border-2 border-brand-dark/20 text-brand-dark font-semibold text-base hover:bg-brand-dark/5 transition-colors"
              >
                Our Services
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl bg-brand-dark/5 backdrop-blur flex items-center justify-center">
                <img src={logoBlack} alt="VectoPix Creative Works" className="w-56 h-auto" />
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm shadow-card"
              >
                Design
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-brand-dark text-primary font-semibold text-sm shadow-card"
              >
                Motion
              </motion.div>
              <motion.div
                animate={{ y: [-3, 7, -3] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute top-1/2 -right-8 px-4 py-2 rounded-xl bg-background text-foreground font-semibold text-sm shadow-card border border-border"
              >
                Impact
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
