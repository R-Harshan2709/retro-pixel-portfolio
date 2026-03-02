import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Online Voting System",
    description: "A secure and reliable online voting platform built in Java, enabling authenticated users to cast votes digitally with real-time result tallying and admin controls.",
    tags: ["Java", "JDBC", "MySQL", "Swing"],
    image: "/images/online-voting-system.png",
    github: "https://github.com/R-Harshan2709/Online-Voting-System",
  },
  {
    title: "Interactive Quiz Platform",
    description: "An engaging web-based quiz platform with timed questions, score tracking, leaderboards, and support for multiple quiz categories.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    image: "/images/interactive-quiz-platform.png",
    github: "https://github.com/R-Harshan2709/Interactive-Quiz-Platform",
  },
  {
    title: "Smart Hospital & Alert System",
    description: "An intelligent hospital management system with real-time patient monitoring, automated alert notifications, and streamlined doctor-patient communication.",
    tags: ["Java", "IoT", "Firebase", "Android"],
    image: "/images/smartambulanceimage.png",
    github: "https://github.com/R-Harshan2709/Smart-Ambulance-and-Hospital-Alert-System",
  },
  {
    title: "Car Rental System",
    description: "A full-featured car rental management system with vehicle listings, booking workflows, customer management, and admin controls.",
    tags: ["Java", "MySQL", "JDBC", "Swing"],
    image: "/images/car-rental-system.png",
    github: "https://github.com/R-Harshan2709/Car_Rental_System",
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
              {/* Project image */}
              <div className="h-40 bg-muted border-b-2 border-foreground flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-4xl">📁</span>
                )}
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
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
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
