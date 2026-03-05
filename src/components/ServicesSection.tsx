import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Layers, PenTool, Megaphone, Monitor, Film, Video, ChevronDown,
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Branding & Creative Strategy",
    desc: "Building strong brand foundations that drive business growth.",
    subs: ["Logo Design", "Brand Identity Systems", "Brand Guidelines", "Corporate Identity", "Brand Positioning", "Creative & Marketing Consulting"],
  },
  {
    icon: PenTool,
    title: "Graphic & Visual Design",
    desc: "Professional visual communication for print and digital platforms.",
    subs: ["Company Profiles", "Brochures & Catalogs", "Business Cards & Stationery", "Marketing Collateral", "Packaging & Label Design", "Social Media Graphics"],
  },
  {
    icon: Megaphone,
    title: "Advertising & Digital Campaigns",
    desc: "Strategic creative solutions designed to engage and convert.",
    subs: ["Campaign Creatives", "Social Media Ads", "Promotional Materials", "Digital Advertising Design", "Product Launch Creatives"],
  },
  {
    icon: Monitor,
    title: "UI/UX & Digital Experience",
    desc: "User-centered design for seamless digital interaction.",
    subs: ["Website Design", "Mobile App Design", "Wireframes & Prototypes", "User Journey Planning", "Interface Design"],
  },
  {
    icon: Film,
    title: "Motion Graphics & Animation",
    desc: "Dynamic visual storytelling that elevates brand communication.",
    subs: ["Logo Animation", "Explainer Videos", "Animated Ads", "Social Media Animations", "Presentation Animations"],
  },
  {
    icon: Video,
    title: "Video Production & Editing",
    desc: "Professional video content crafted to inform, engage, and convert.",
    subs: ["Promotional Videos", "Corporate Videos", "Product Demos", "Event Coverage", "Social Media Video Editing", "Color Grading & Post-Production"],
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 sm:p-6 md:p-8 rounded-2xl glass-card-light glass-shimmer"
      >
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex gap-3 sm:gap-4 items-start flex-1 min-w-0">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-dark" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[clamp(1rem,2.8vw,1.3rem)] font-bold text-foreground mb-1 break-words">{service.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">{service.desc}</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 mt-1"
          >
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 sm:mt-5 ml-0 sm:ml-16 flex flex-wrap gap-2">
                {service.subs.map((sub) => (
                  <span
                    key={sub}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-muted text-muted-foreground text-xs sm:text-sm font-medium"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">What We Do</span>
          <h2 className="fluid-heading font-bold mt-3 text-foreground">
            Our <span className="text-gradient-yellow">Services</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-muted-foreground max-w-xl mx-auto text-[clamp(0.95rem,2.5vw,1.05rem)]">
            Comprehensive creative solutions tailored to elevate your brand across every touchpoint.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
