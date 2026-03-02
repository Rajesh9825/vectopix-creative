import { motion } from "framer-motion";
import logoBlack from "@/assets/logo-black.png";
import penToolGif2 from "@/assets/pen-tool-animation2.gif";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">

      <div className="container mx-auto px-4 md:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-brand-dark leading-tight mb-6">
              Design.
              <br />
              <span className="text-secondary">Motion.</span>
              <img
                src={penToolGif2}
                alt=""
                aria-hidden="true"
                className="inline-block h-20 md:h-24 w-auto ml-4 align-middle opacity-40 mix-blend-multiply lg:hidden"
              />
              <br />
              Impact.
            </h1>

            <p className="text-lg text-brand-dark/70 max-w-md mb-10 leading-relaxed">
              Professional graphic design, motion graphics & video editing solutions crafted for brands that demand excellence.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="/portfolio"
                className="px-8 py-4 rounded-xl bg-brand-dark text-primary font-semibold text-base hover:bg-brand-dark/90 transition-colors shadow-elevated inline-block"
              >
                Explore Our Work
              </a>
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
