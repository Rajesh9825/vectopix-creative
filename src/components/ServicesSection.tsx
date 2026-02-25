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
        className="w-full text-left p-6 md:p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:border-primary/30"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-4 items-start flex-1">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
              <Icon className="w-6 h-6 text-brand-dark" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.desc}</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 mt-1"
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
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
              <div className="mt-5 ml-16 flex flex-wrap gap-2">
                {service.subs.map((sub) => (
                  <span
                    key={sub}
                    className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-sm font-medium"
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
    <section id="services" className="py-24 md:py-32 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Our <span className="text-gradient-yellow">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Comprehensive creative solutions tailored to elevate your brand across every touchpoint.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
