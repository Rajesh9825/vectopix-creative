import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Clapperboard, Sparkles } from "lucide-react";

const values = [
  { icon: Palette, title: "Design", desc: "Crafting visual identities that communicate, captivate, and convert." },
  { icon: Clapperboard, title: "Motion", desc: "Bringing brands to life through dynamic animation and video." },
  { icon: Sparkles, title: "Impact", desc: "Delivering results that drive growth and leave lasting impressions." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">About Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4 sm:mb-6 text-foreground">
              We Create What
              <br />
              <span className="text-gradient-yellow">Brands Need</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              VectoPix Creative Works is a professional graphic design and creative studio based in Pune, India.
              We specialize in building powerful brand identities, creating stunning visual content, and producing
              dynamic motion graphics that elevate your brand communication.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              From startups to corporates, we deliver design solutions that are strategically crafted to engage
              your audience and drive business growth — both locally and internationally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid gap-4 sm:gap-6"
          >
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                className="flex gap-4 sm:gap-5 p-4 sm:p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-shadow"
              >
                <div className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <item.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary-foreground" style={{ color: "hsl(var(--brand-dark))" }} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
