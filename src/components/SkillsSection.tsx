import { motion } from "framer-motion";
import {
  Code2, Database, Server, Smartphone, GitBranch,
  Cloud, Terminal, Layers, Palette, Coffee, Globe, Cpu,
} from "lucide-react";

const skills = [
  { name: "React / Next.js", icon: Code2 },
  { name: "TypeScript", icon: Terminal },
  { name: "Node.js", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "React Native", icon: Smartphone },
  { name: "Git / CI/CD", icon: GitBranch },
  { name: "AWS / Cloud", icon: Cloud },
  { name: "Docker", icon: Layers },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Java", icon: Coffee },
  { name: "HTML / CSS", icon: Globe },
  { name: "IoT / Arduino", icon: Cpu },
];

// Duplicate for seamless loop
const doubled = [...skills, ...skills];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      {/* Inject keyframe directly — 100% reliable */}
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .skills-track {
          display: flex;
          width: max-content;
          animation: ticker 25s linear infinite;
        }
        .skills-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="section-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="retro-tag bg-secondary text-secondary-foreground mb-4">Skills</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mt-4">
            My Tech Stack
          </h2>
        </motion.div>
      </div>

      {/* Marquee wrapper — overflow hidden + fade edges */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }} />

        <div className="skills-track">
          {doubled.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={`${skill.name}-${i}`}
                className="retro-card flex items-center gap-3 px-5 py-3 mx-2 shrink-0 cursor-default group"
              >
                <div className="p-2 border-2 border-foreground bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={18} />
                </div>
                <span className="font-heading text-sm font-semibold whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
