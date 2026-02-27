import { motion } from "framer-motion";
import logoBlack from "@/assets/logo-black.png";
import {
  PenToolElement,
  BrushElement,
  PencilElement,
  EyedropperElement,
  KeyframeElement,
  GradientToolElement,
  LayersElement,
  PlayButtonElement,
  FilmCutElement,
} from "./DesignToolElements";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
    >
      {/* ── Decorative design tool elements ── */}
      <PenToolElement className="absolute top-28 right-[4%] text-brand-dark/20 hidden lg:block" />
      <BrushElement className="absolute bottom-36 right-[6%] text-brand-dark/15 hidden lg:block" />
      <PencilElement className="absolute top-[55%] right-[2%] text-brand-dark/15 hidden xl:block" />
      <EyedropperElement className="absolute top-20 right-[30%] text-brand-dark/12 hidden xl:block" />
      <KeyframeElement className="absolute bottom-[22%] right-[18%] text-brand-dark/15 hidden lg:block" />
      <GradientToolElement className="absolute top-[40%] right-[8%] text-brand-dark/10 hidden xl:block" />
      <LayersElement className="absolute bottom-28 right-[35%] text-brand-dark/12 hidden xl:block" />
      <PlayButtonElement className="absolute top-[30%] right-[25%] text-brand-dark/15 hidden lg:block" />
      <FilmCutElement className="absolute bottom-[40%] right-[12%] text-brand-dark/10 hidden xl:block" />

      {/* ── Content ── */}
      <div className="container mx-auto px-4 md:px-8 pt-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left 60% — safe content zone */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
              Design.
              <br />
              <span className="text-secondary">Motion.</span>
              <br />
              Impact.
            </h1>

            <p className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed">
              Professional graphic design, motion graphics & video editing
              solutions crafted for brands that demand excellence.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="/portfolio"
                className="px-8 py-4 rounded-xl bg-foreground text-background font-semibold text-base hover:opacity-90 transition-opacity shadow-elevated inline-block"
              >
                Explore Our Work
              </a>
              <button
                onClick={() => scrollTo("#services")}
                className="px-8 py-4 rounded-xl border-2 border-border text-foreground font-semibold text-base hover:bg-muted transition-colors"
              >
                Our Services
              </button>
            </div>
          </motion.div>

          {/* Right 40% — logo card */}
          <motion.div
            className="lg:col-span-2 hidden lg:flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl bg-muted/60 backdrop-blur flex items-center justify-center">
                <img
                  src={logoBlack}
                  alt="VectoPix Creative Works"
                  className="w-56 h-auto"
                />
              </div>
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
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-foreground text-background font-semibold text-sm shadow-card"
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
