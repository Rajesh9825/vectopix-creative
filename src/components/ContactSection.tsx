import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Twitter, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Would integrate with backend
    alert("Thank you! We'll get back to you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-blue relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full border-2 border-secondary-foreground/10" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full border-2 border-secondary-foreground/10" />

      <div className="container mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-secondary-foreground">
            Let's Work Together
          </h2>
          <p className="mt-4 text-secondary-foreground/70 max-w-xl mx-auto">
            Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary-foreground">Phone</h4>
                <p className="text-secondary-foreground/70 text-sm">+91 70384 73369</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary-foreground">Email</h4>
                <p className="text-secondary-foreground/70 text-sm">hello@vectopix.in</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary-foreground">Address</h4>
                <p className="text-secondary-foreground/70 text-sm">
                  Shop No.03, Ganesh Chamber,<br />
                  Balaji Nagar, Pune - 411043
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              {[
                { icon: Instagram, href: "https://instagram.com/vectopixcreatives" },
                { icon: Linkedin, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/30 transition-colors"
                >
                  <Icon className="w-5 h-5 text-secondary-foreground" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-background/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-secondary-foreground/10"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:border-primary transition-colors mb-4"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:border-primary transition-colors mb-6 resize-none"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
