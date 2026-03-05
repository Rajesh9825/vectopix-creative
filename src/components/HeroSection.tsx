import { motion } from "framer-motion";
import logoBlack from "@/assets/logo-black.png";
import penToolGif2 from "@/assets/pen-tool-animation2.gif";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-hero lg:min-h-[calc(100svh-4rem)] lg:flex lg:items-center"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-[clamp(5.5rem,14vw,7rem)] pb-[clamp(3rem,10vw,5rem)] w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="relative fluid-display font-bold text-brand-dark mb-4 sm:mb-6">
              Design.
              <br />
              <span className="text-secondary">Motion.</span>
              <img
                src={penToolGif2}
                alt=""
                aria-hidden="true"
                className="absolute right-0 top-1/2 -translate-y-1/2 h-16 sm:h-20 md:h-24 w-auto opacity-35 mix-blend-multiply lg:hidden"
              />
              <br />
              Impact.
            </h1>

            <p className="text-[clamp(1rem,3.6vw,1.35rem)] text-brand-dark/75 max-w-md mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed">
              Professional graphic design, motion graphics & video editing solutions crafted for brands that demand excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-2 sm:mb-4 justify-center lg:justify-start">
              <a
                href="/portfolio"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-brand-dark text-primary font-semibold text-sm sm:text-base hover:bg-brand-dark/90 transition-colors shadow-elevated inline-block text-center"
              >
                Explore Our Work
              </a>
              <button
                onClick={() => scrollTo("#services")}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-brand-dark/20 text-brand-dark font-semibold text-sm sm:text-base hover:bg-brand-dark/5 transition-colors"
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
              <div className="w-64 xl:w-80 h-64 xl:h-80 rounded-3xl glass-card-light flex items-center justify-center">
                <img src={logoBlack} alt="VectoPix Creative Works" className="w-44 xl:w-56 h-auto" />
              </div>
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 px-3 xl:px-4 py-1.5 xl:py-2 rounded-xl glass-strong text-secondary-foreground font-semibold text-xs xl:text-sm"
              >
                Design
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
                className="absolute -bottom-4 -left-4 px-3 xl:px-4 py-1.5 xl:py-2 rounded-xl glass-strong text-primary font-semibold text-xs xl:text-sm"
              >
                Motion
              </motion.div>
              <motion.div
                animate={{ y: [-3, 7, -3] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute top-1/2 -right-8 px-3 xl:px-4 py-1.5 xl:py-2 rounded-xl glass-strong text-foreground font-semibold text-xs xl:text-sm"
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
