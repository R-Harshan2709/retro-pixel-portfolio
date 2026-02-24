import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "X / Twitter", href: "#" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", form);
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <span className="retro-tag bg-primary text-primary-foreground mb-4">
            Contact
          </span>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mt-4 mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Got a project in mind? I'd love to hear about it. Drop me a message and I'll
            get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-xl mx-auto space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="retro-input w-full"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="retro-input w-full"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="retro-input w-full resize-none"
            required
          />
          <Button variant="hero" size="lg" type="submit" className="w-full">
            <Send size={18} className="mr-2" />
            Send Message
          </Button>
        </motion.form>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex justify-center gap-4 mt-12"
        >
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="p-3 border-2 border-foreground bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-colors retro-shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t-2 border-foreground/20">
          <p className="text-muted-foreground font-heading text-sm uppercase tracking-wider">
            &copy; {new Date().getFullYear()} — Designed & Built with ♥
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
