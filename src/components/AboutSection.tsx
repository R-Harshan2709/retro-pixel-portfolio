import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "20+", label: "Happy Clients" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <span className="retro-tag bg-secondary text-secondary-foreground">About Me</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-3"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
              I'm <span className="text-primary">Harshan</span>, I build
              <span className="text-secondary"> innovative solutions</span> from web to IoT.
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                I'm a passionate full-stack developer with experience building end-to-end
                applications spanning web platforms, IoT systems, and enterprise solutions.
                From designing secure voting systems to smart hospital alerts, I love
                solving real-world problems with technology.
              </p>
              <p>
                My expertise includes Java, web technologies, IoT integration, and building
                interactive platforms. I'm driven by clean code, user-centric design, and
                delivering impactful projects that make a difference.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="retro-card p-6 text-center"
              >
                <div className="text-4xl font-heading font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="font-heading text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
