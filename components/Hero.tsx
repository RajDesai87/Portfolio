"use client";

import { useEffect, useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import {
  MapPin,
  Mail,
  ArrowRight,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const TYPED_COMMAND = "raj@backend:~$ whoami";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const [displayedText, setDisplayedText] = useState(TYPED_COMMAND);
  const [isClient, setIsClient] = useState(false);
  const animationRan = useRef(false);

  useEffect(() => {
    setIsClient(true);
    if (animationRan.current) return;
    animationRan.current = true;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setDisplayedText(TYPED_COMMAND);
      return;
    }

    // Start with empty string for typing on client
    setDisplayedText("");
    let charIndex = 0;
    let lastTime = performance.now();
    let frameId: number;

    const step = (now: number) => {
      if (now - lastTime >= 35) {
        lastTime = now;
        charIndex++;
        setDisplayedText(TYPED_COMMAND.slice(0, charIndex));
      }

      if (charIndex < TYPED_COMMAND.length) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-36 sm:pt-40 pb-24 overflow-hidden bg-grid-pattern text-center"
    >
      {/* Ambient Gradient Glow Orbs */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] sm:h-[650px] rounded-full pointer-events-none opacity-20 animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, var(--accent-from) 0%, var(--accent-to) 45%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <div className="relative z-10 max-w-4xl w-full mx-auto flex flex-col items-center space-y-8 sm:space-y-10">
        
        {/* Centered Terminal Line Prompt with Fixed Height to Prevent Layout Shift */}
        <div className="inline-flex items-center gap-2.5 font-mono text-sm sm:text-base text-[var(--text-secondary)] bg-[var(--surface-glass)] border border-[var(--border-glass)] backdrop-blur-xl rounded-full px-6 py-3 shadow-md min-h-[50px] min-w-[280px] sm:min-w-[340px] justify-center">
          <span className="text-[var(--accent-from)] font-bold text-base select-none">❯</span>
          <span className="font-semibold text-[var(--text-primary)]">
            {isClient ? displayedText : TYPED_COMMAND}
          </span>
          <span
            className="cursor-blink text-[var(--accent-from)] font-bold ml-0.5 select-none"
            aria-hidden="true"
          >
            ▍
          </span>
        </div>

        {/* Main Hero Typography & Actions - Rendered with Staggered Fade */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center space-y-7 sm:space-y-8 w-full"
        >
          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[1.05]"
          >
            <span className="gradient-text">Raj Desai</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-xl sm:text-2xl md:text-3xl text-[var(--accent-from)] font-semibold tracking-wide"
          >
            Backend / Python Developer Intern
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-[var(--text-secondary)] text-base sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-normal text-center"
          >
            CS Engineering student building backend systems, REST APIs, and
            ML/RAG pipelines with Python, Django, and FastAPI.
          </motion.p>

          {/* Center-Aligned Info Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-2 font-mono text-sm sm:text-base"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--surface-glass)] border border-[var(--border-glass)] text-[var(--text-secondary)] shadow-sm">
              <MapPin size={16} className="text-[var(--accent-from)]" />
              <span>Ahmedabad, Gujarat, India</span>
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold shadow-sm">
              <GraduationCap size={17} />
              <span>GPA: 9.07 / 10 • 3rd Year CS</span>
            </span>
          </motion.div>

          {/* Centered Large CTA Buttons with Terminal Cursor Hover Motif */}
          <motion.div
            variants={itemVariants}
            className="pt-6 flex flex-wrap items-center justify-center gap-5"
          >
            <button
              type="button"
              onClick={handleScrollToProjects}
              className="terminal-btn group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl font-bold text-base text-[#0B0E14] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-xl shadow-[var(--accent-from)]/25 cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-from), var(--accent-via), var(--accent-to))",
              }}
            >
              <span className="terminal-prompt-prefix font-mono font-bold select-none">❯</span>
              <span>View Projects</span>
              <span className="terminal-cursor-indicator font-mono font-bold select-none">▍</span>
              <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Resume Link Opening in New Tab */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-btn group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl font-bold text-base border border-[var(--border-glass)] bg-[var(--surface-glass)] text-[var(--text-primary)] hover:border-[var(--accent-from)] hover:text-[var(--accent-from)] backdrop-blur-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md"
            >
              <span className="terminal-prompt-prefix font-mono font-bold select-none text-[var(--accent-from)]">❯</span>
              <span>View Resume</span>
              <span className="terminal-cursor-indicator font-mono font-bold select-none text-[var(--accent-from)]">▍</span>
              <ExternalLink size={18} aria-hidden="true" className="group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
            </a>
          </motion.div>

          {/* Large Social Links with Generous Spacing */}
          <motion.div
            variants={itemVariants}
            className="pt-4 flex items-center justify-center gap-4 sm:gap-5"
          >
            <a
              href="https://github.com/RajDesai87"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface-glass)] border border-[var(--border-glass)] hover:border-[var(--accent-from)] transition-all duration-200 shadow-md hover:scale-105"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/raj-desai132"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface-glass)] border border-[var(--border-glass)] hover:border-[var(--accent-from)] transition-all duration-200 shadow-md hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={22} />
            </a>
            <a
              href="mailto:rajgpdesai2007@gmail.com"
              className="p-4 rounded-2xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface-glass)] border border-[var(--border-glass)] hover:border-[var(--accent-from)] transition-all duration-200 shadow-md hover:scale-105"
              aria-label="Email Raj Desai"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
