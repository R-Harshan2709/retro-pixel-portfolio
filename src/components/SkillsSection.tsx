import { motion } from "framer-motion";
import {
  Code2, Database, Globe, Server, Smartphone, GitBranch,
  Cloud, Terminal, Layers, Palette, Zap, Shield,
} from "lucide-react";

const skills = [
  { name: "React / Next.js", icon: Code2 },
  { name: "TypeScript", icon: Terminal },
  { name: "Node.js", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "REST / GraphQL", icon: Globe },
  { name: "React Native", icon: Smartphone },
  { name: "Git / CI/CD", icon: GitBranch },
  { name: "AWS / Cloud", icon: Cloud },
  { name: "Docker", icon: Layers },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Performance", icon: Zap },
  { name: "Security", icon: Shield },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <span className="retro-tag bg-secondary text-secondary-foreground mb-4">Skills</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mt-4">
            My Tech Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                className="retro-card p-4 flex items-center gap-3 group cursor-default"
              >
                <div className="p-2 border-2 border-foreground bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={20} />
                </div>
                <span className="font-heading text-sm font-semibold">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
