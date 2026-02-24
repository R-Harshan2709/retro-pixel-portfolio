import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const RetroComputer = lazy(() => import("./RetroComputer"));

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="inline-block retro-tag bg-secondary text-secondary-foreground mb-6">
              Available for hire
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[0.95] mb-6">
              Full Stack
              <br />
              <span className="text-primary">Developer</span>
              <span className="text-secondary">.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 font-body leading-relaxed">
              Building pixel-perfect interfaces & robust backends.
              I turn complex ideas into clean, performant applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                <Download className="mr-2" size={18} />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </motion.div>

          {/* 3D side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 h-[350px] sm:h-[450px] lg:h-[550px] glow-screen rounded-lg"
          >
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center text-muted-foreground font-heading">
                  Loading 3D...
                </div>
              }
            >
              <RetroComputer />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
