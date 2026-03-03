import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import penToolGif from "@/assets/pen-tool-animation.gif";
import penToolGif2 from "@/assets/pen-tool-animation2.gif";

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
    <section id="contact" className="py-14 md:py-20 2xl:py-28 bg-gradient-blue relative overflow-hidden" ref={ref}>
      {/* Pen tool animation */}
      <img
        src={penToolGif}
        alt=""
        aria-hidden="true"
        className="absolute top-4 left-4 md:top-6 md:left-8 w-16 md:w-36 opacity-20 md:opacity-30 pointer-events-none mix-blend-multiply"
      />
      <img
        src={penToolGif2}
        alt=""
        aria-hidden="true"
        className="absolute top-4 right-4 md:top-6 md:right-8 w-16 md:w-36 opacity-20 md:opacity-30 pointer-events-none mix-blend-multiply"
      />
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold mt-3 text-secondary-foreground">
            Let's Work Together
          </h2>
          <p className="mt-4 text-secondary-foreground/70 max-w-xl mx-auto text-sm md:text-base 2xl:text-lg">
            Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-background rounded-2xl p-6 sm:p-8 md:p-10 shadow-elevated"
        >
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all mb-3 sm:mb-4 text-sm sm:text-base"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all mb-4 sm:mb-6 resize-none text-sm sm:text-base"
          />
          <button
            type="submit"
            className="w-full px-8 py-3 sm:py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-card text-sm sm:text-base"
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
