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

      {/* Illustrator-style decorative elements */}
      <svg className="absolute top-16 right-1/3 opacity-10" width="120" height="120" viewBox="0 0 120 120" fill="none">
        <path d="M60 10L110 95H10L60 10Z" stroke="hsl(var(--brand-dark))" strokeWidth="2" />
        <circle cx="60" cy="60" r="25" stroke="hsl(var(--brand-dark))" strokeWidth="1.5" />
      </svg>
      <svg className="absolute bottom-40 left-20 opacity-10" width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="10" y="10" width="60" height="60" rx="8" stroke="hsl(var(--brand-dark))" strokeWidth="2" transform="rotate(15 40 40)" />
        <rect x="20" y="20" width="40" height="40" rx="4" stroke="hsl(var(--brand-dark))" strokeWidth="1.5" transform="rotate(30 40 40)" />
      </svg>
      <svg className="absolute top-1/2 right-12 opacity-8 hidden md:block" width="100" height="100" viewBox="0 0 100 100" fill="none">
        <path d="M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z" stroke="hsl(var(--brand-dark))" strokeWidth="1.5" opacity="0.1" />
      </svg>
      {/* Pen tool path - illustrator reference */}
      <svg className="absolute bottom-20 right-1/3 opacity-10 hidden md:block" width="150" height="60" viewBox="0 0 150 60" fill="none">
        <path d="M0 50 C30 50 30 10 60 10 C90 10 90 50 120 50 C135 50 145 30 150 10" stroke="hsl(var(--brand-dark))" strokeWidth="2" strokeLinecap="round" />
      </svg>
      {/* Small cross marks */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 opacity-15">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-brand-dark -translate-y-1/2" />
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-brand-dark -translate-x-1/2" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 opacity-10">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-brand-dark -translate-y-1/2" />
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-brand-dark -translate-x-1/2" />
      </div>
      {/* Dotted circle */}
      <svg className="absolute bottom-1/3 right-16 opacity-10" width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="25" stroke="hsl(var(--brand-dark))" strokeWidth="1.5" strokeDasharray="4 4" />
      </svg>

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
              <br />
              Impact.
            </h1>

            <p className="text-lg text-brand-dark/70 max-w-md mb-10 leading-relaxed">
              Professional graphic design, motion graphics & video editing solutions crafted for brands that demand excellence.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
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
