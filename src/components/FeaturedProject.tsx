import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const techStack = ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"];

const FeaturedProject = () => {
  return (
    <section className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8"
        >
          <span className="retro-tag bg-primary text-primary-foreground mb-4">
            ★ Masterpiece
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="retro-card p-0 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image placeholder */}
            <div className="bg-muted h-64 lg:h-auto flex items-center justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-foreground">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🖥️</div>
                <p className="font-heading text-sm uppercase tracking-wider text-muted-foreground">
                  Project Screenshot
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
                CloudSync Platform
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                A real-time collaborative platform that synchronizes data across
                distributed teams. Built with a microservices architecture handling
                100k+ concurrent connections with sub-50ms latency.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {techStack.map((tech) => (
                  <span key={tech} className="retro-tag bg-muted text-foreground">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="default">
                  <ExternalLink size={16} className="mr-1" />
                  View Live
                </Button>
                <Button variant="outline" size="default">
                  <Github size={16} className="mr-1" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
