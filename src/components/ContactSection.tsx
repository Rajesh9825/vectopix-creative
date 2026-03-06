import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-blue relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Get In Touch</span>
          <h2 className="fluid-heading font-bold mt-3 text-secondary-foreground">
            Let's Work Together
          </h2>
          <p className="mt-3 sm:mt-4 text-secondary-foreground/80 max-w-xl mx-auto text-[clamp(0.95rem,2.6vw,1.05rem)]">
            Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-background rounded-2xl p-[clamp(1.25rem,4vw,2.5rem)] shadow-elevated"
        >
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all mb-3 sm:mb-4 text-sm sm:text-base"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all mb-4 sm:mb-6 resize-none text-sm sm:text-base"
          />
          <button
            type="submit"
            className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-card text-sm sm:text-base"
          >
            Send Message
            <Send className="w-4 h-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
