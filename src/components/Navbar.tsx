import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { useSpiderMan } from "@/context/SpiderManContext";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  const { isSpiderman, toggleSpiderman: ctxToggle } = useSpiderMan();

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const toggleSpiderman = () => {
    const next = !isSpiderman;
    ctxToggle();
    if (next) {
      toast("🕷️ Spider-Man Mode Activated!", {
        description: "With great power comes great responsibility.",
        duration: 3000,
      });
    } else {
      toast("🕸️ Back to normal!", {
        description: "Spider-Man has left the building.",
        duration: 2000,
      });
    }
  };

  const SpidermanIcon = () => (
    <span style={{ fontSize: "16px", lineHeight: 1, display: "inline-flex", alignItems: "center" }}>
      {isSpiderman ? "🕸️" : "🕷️"}
    </span>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b-2 border-foreground">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="font-heading text-xl font-bold tracking-tight">
          &lt;Harshan /&gt;
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded border-2 border-foreground bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <motion.button
            onClick={toggleSpiderman}
            aria-label="Toggle Spider-Man theme"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className={`p-2 rounded border-2 transition-all duration-300 spidey-btn ${isSpiderman
                ? "border-red-500 bg-red-900/80 text-white"
                : "border-foreground bg-muted hover:border-red-500 hover:bg-red-950"
              }`}
          >
            <SpidermanIcon />
          </motion.button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded border-2 border-foreground bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <motion.button
            onClick={toggleSpiderman}
            aria-label="Toggle Spider-Man theme"
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded border-2 transition-all duration-300 ${isSpiderman
                ? "border-red-500 bg-red-900/80 text-white"
                : "border-foreground bg-muted hover:border-red-500"
              }`}
          >
            <SpidermanIcon />
          </motion.button>
          <button
            className="p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t-2 border-foreground bg-background overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-heading text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-primary py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
