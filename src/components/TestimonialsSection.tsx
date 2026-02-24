import { motion } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "One of the most talented developers I've ever worked with. Delivers clean, maintainable code consistently.",
    name: "Sarah Chen",
    role: "CTO, TechCorp",
  },
  {
    quote: "Transformed our entire frontend architecture. The performance improvements were immediately measurable.",
    name: "Marcus Johnson",
    role: "Product Lead, StartupXYZ",
  },
  {
    quote: "Incredibly reliable and communicative. Always goes above and beyond to deliver exceptional results.",
    name: "Emily Rodriguez",
    role: "Project Manager, DesignStudio",
  },
  {
    quote: "A true full-stack expert. From database optimization to beautiful UI animations — he does it all.",
    name: "David Park",
    role: "Engineering Manager, CloudBase",
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <span className="retro-tag bg-secondary text-secondary-foreground mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mt-4">
            What People Say
          </h2>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="retro-card p-8 min-w-[320px] sm:min-w-[400px] snap-start flex-shrink-0"
            >
              <div className="text-5xl text-primary font-heading leading-none mb-4">
                &ldquo;
              </div>
              <p className="text-foreground font-body leading-relaxed mb-6 italic">
                {t.quote}
              </p>
              <div className="border-t-2 border-foreground/20 pt-4">
                <p className="font-heading font-bold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs font-heading uppercase tracking-wider">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
