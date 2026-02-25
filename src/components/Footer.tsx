import logoWhite from "@/assets/logo-white.png";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={logoWhite} alt="VectoPix" className="h-14 w-auto mb-4" />
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Professional graphic design, motion graphics & video editing studio crafting impactful brand experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(`#${l.toLowerCase()}`)}
                  className="text-left text-sm hover:text-primary transition-colors"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              <p>+91 70384 73369</p>
              <p>hello@vectopix.in</p>
              <p>Ganesh Chamber, Balaji Nagar, Pune - 411043</p>
            </div>
            <div className="flex gap-3 mt-4">
              {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p className="text-center text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} VectoPix Creative Works. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
