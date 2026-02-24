import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Online Voting System",
    description: "A secure and reliable online voting platform built in Java, enabling authenticated users to cast votes digitally with real-time result tallying and admin controls.",
    tags: ["Java", "JDBC", "MySQL", "Swing"],
  },
  {
    title: "Interactive Quiz Platform",
    description: "An engaging web-based quiz platform with timed questions, score tracking, leaderboards, and support for multiple quiz categories.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Smart Hospital & Alert System",
    description: "An intelligent hospital management system with real-time patient monitoring, automated alert notifications, and streamlined doctor-patient communication.",
    tags: ["Java", "IoT", "Firebase", "Android"],
  },
  {
    title: "QR Based Tampering Detection (IoT)",
    description: "An IoT-powered system that uses QR codes to detect product tampering, ensuring authenticity and security throughout the supply chain.",
    tags: ["IoT", "Arduino", "Python", "QR Code"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <span className="retro-tag bg-primary text-primary-foreground mb-4">Projects</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mt-4">
            Things I've Built
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="retro-card p-0 overflow-hidden group"
            >
              {/* Image placeholder */}
              <div className="h-40 bg-muted border-b-2 border-foreground flex items-center justify-center">
                <span className="text-4xl">📁</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="retro-tag text-[10px] bg-background">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
