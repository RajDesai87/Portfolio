"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  MapPin,
  Mail,
  Download,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const TYPED_COMMAND = "raj@backend:~$ whoami";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: customDelay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setPrefersReducedMotion(true);
      setDisplayedText(TYPED_COMMAND);
      setTypingComplete(true);
      return;
    }

    let charIndex = 0;
    const typingInterval = setInterval(() => {
      charIndex++;
      setDisplayedText(TYPED_COMMAND.slice(0, charIndex));
      if (charIndex >= TYPED_COMMAND.length) {
        clearInterval(typingInterval);
        setTimeout(() => setTypingComplete(true), 200);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, []);

  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-40 pb-28 overflow-hidden bg-grid-pattern text-center"
    >
      {/* Ambient Gradient Glow Orbs */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] sm:h-[650px] rounded-full pointer-events-none opacity-25 dark:opacity-20 animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, var(--accent-from) 0%, var(--accent-to) 45%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <div className="relative z-10 max-w-4xl w-full mx-auto flex flex-col items-center space-y-9 sm:space-y-10">
        
        {/* Centered Terminal Line Prompt */}
        <div className="inline-flex items-center gap-2.5 font-mono text-sm sm:text-base text-[var(--text-secondary)] bg-[var(--surface-glass)] border border-[var(--border-glass)] backdrop-blur-xl rounded-full px-6 py-3 shadow-md">
          <span className="text-[var(--accent-from)] font-bold text-base">❯</span>
          <span className="font-semibold">{displayedText}</span>
          <span
            className="cursor-blink text-[var(--accent-from)] font-bold ml-0.5 select-none"
            aria-hidden="true"
          >
            ▍
          </span>
        </div>

        {/* Revealed Main Hero Typography */}
        {(typingComplete || prefersReducedMotion) && (
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={fadeInUp}
            custom={0}
            className="flex flex-col items-center space-y-7 sm:space-y-8 w-full"
          >
            {/* Main Headline */}
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[1.05]">
              <span className="gradient-text">Raj Desai</span>
            </h1>

            {/* Subtitle */}
            <p className="font-mono text-xl sm:text-2xl md:text-3xl text-[var(--accent-from)] font-semibold tracking-wide">
              Backend / Python Developer Intern
            </p>

            {/* Tagline */}
            <p className="text-[var(--text-secondary)] text-base sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-normal text-center">
              CS Engineering student building backend systems, REST APIs, and
              ML/RAG pipelines with Python, Django, and FastAPI.
            </p>

            {/* Center-Aligned Info Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 font-mono text-sm sm:text-base">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--surface-glass)] border border-[var(--border-glass)] text-[var(--text-secondary)] shadow-sm">
                <MapPin size={16} className="text-[var(--accent-from)]" />
                <span>Ahmedabad, Gujarat, India</span>
              </span>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold shadow-sm">
                <GraduationCap size={17} />
                <span>GPA: 9.07 / 10 • 3rd Year CS</span>
              </span>
            </div>

            {/* Centered Large CTA Buttons */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-5">
              <button
                type="button"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl font-bold text-base text-[#0B0E14] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-xl shadow-[var(--accent-from)]/25 cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent-from), var(--accent-via), var(--accent-to))",
                }}
              >
                <span>View Projects</span>
                <ArrowRight size={18} aria-hidden="true" />
              </button>

              {/* Note: Drop your actual PDF into /public/resume.pdf */}
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl font-bold text-base border border-[var(--border-glass)] bg-[var(--surface-glass)] text-[var(--text-primary)] hover:border-[var(--accent-from)] hover:text-[var(--accent-from)] backdrop-blur-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md"
              >
                <Download size={18} aria-hidden="true" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Large Social Links with Generous Spacing */}
            <div className="pt-4 flex items-center justify-center gap-4 sm:gap-5">
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
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
