import logoWhite from "@/assets/logo-white.png";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark py-12 md:py-16">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <img src={logoWhite} alt="VectoPix" className="h-12 md:h-14 w-auto mb-4" />
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Professional graphic design, motion graphics & video editing studio crafting impactful brand experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-4 text-sm sm:text-base">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(`#${l.toLowerCase()}`)}
                  className="text-left text-xs sm:text-sm hover:text-primary transition-colors"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-4 text-sm sm:text-base">Contact</h4>
            <div className="flex flex-col gap-2 text-xs sm:text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              <p>+91 70384 73369</p>
              <p>hello@vectopix.in</p>
              <p>Ganesh Chamber, Balaji Nagar, Pune - 411043</p>
            </div>
            <div className="flex gap-3 mt-4">
              {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t pt-6 md:pt-8" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p className="text-center text-xs sm:text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} VectoPix Creative Works. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
