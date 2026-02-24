import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    dates: "2022 — Present",
    achievements: [
      "Led migration of monolithic app to microservices, reducing deploy time by 80%",
      "Architected real-time notification system handling 500k+ daily events",
      "Mentored team of 4 junior developers on best practices",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "StartupXYZ",
    dates: "2020 — 2022",
    achievements: [
      "Built customer-facing dashboard from scratch, increasing user engagement by 40%",
      "Implemented CI/CD pipeline reducing release cycles from weeks to hours",
      "Designed and deployed RESTful APIs serving 1M+ requests/day",
    ],
  },
  {
    role: "Frontend Developer",
    company: "DesignStudio",
    dates: "2019 — 2020",
    achievements: [
      "Developed responsive web apps for 15+ clients across various industries",
      "Introduced component-driven architecture using React and Storybook",
      "Achieved 95+ Lighthouse performance scores on all projects",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <span className="retro-tag bg-primary text-primary-foreground mb-4">Experience</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mt-4">
            Where I've Worked
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-foreground/20" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-5px] md:left-[27px] top-2 w-3 h-3 bg-primary border-2 border-foreground" />

                <div className="retro-card p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-heading font-bold">{exp.role}</h3>
                      <p className="text-primary font-heading font-semibold text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <span className="retro-tag bg-muted text-muted-foreground text-xs">
                      {exp.dates}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, j) => (
                      <li
                        key={j}
                        className="text-muted-foreground font-body text-sm flex items-start gap-2"
                      >
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
