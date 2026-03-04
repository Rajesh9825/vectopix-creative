import logoWhite from "@/assets/logo-white.png";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark py-[clamp(2.5rem,8vw,4.5rem)]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="sm:col-span-2 md:col-span-1">
            <img src={logoWhite} alt="VectoPix" className="h-12 sm:h-14 w-auto mb-4" />
            <p className="text-sm leading-relaxed text-secondary-foreground/60">
              Professional graphic design, motion graphics & video editing studio crafting impactful brand experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-3 sm:mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(`#${l.toLowerCase()}`)}
                  className="text-left text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-3 sm:mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-secondary-foreground/60">
              <p>+91 70384 73369</p>
              <p>hello@vectopix.in</p>
              <p>Ganesh Chamber, Balaji Nagar, Pune - 411043</p>
            </div>
            <div className="flex gap-3 mt-4">
              {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-secondary-foreground/10 text-secondary-foreground/60 hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 sm:pt-8">
          <p className="text-center text-xs sm:text-sm text-secondary-foreground/40">
            © {new Date().getFullYear()} VectoPix Creative Works. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
