"use client";

import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActive("contact");
        return;
      }

      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.42) {
            current = id;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 transition-all duration-300 pointer-events-none">
      <div
        className={`w-full max-w-5xl mx-auto pointer-events-auto transition-all duration-300 ${
          scrolled
            ? "glass-panel sm:rounded-2xl md:rounded-full shadow-2xl shadow-black/20 px-5 sm:px-7 py-3 sm:py-3.5 border border-[var(--border-glass)]"
            : "bg-[var(--surface)]/90 sm:rounded-2xl md:rounded-full backdrop-blur-md px-5 sm:px-7 py-3 sm:py-3.5 border border-[var(--border)] shadow-md"
        }`}
      >
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="group flex items-center gap-2.5 font-mono text-sm sm:text-base font-semibold tracking-tight transition-transform active:scale-95"
            aria-label="Raj Desai - Home"
          >
            <div className="w-8 h-8 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-from)] group-hover:border-[var(--accent-from)] group-hover:shadow-[0_0_12px_var(--accent-glow)] transition-all shadow-sm">
              <Terminal size={16} />
            </div>
            <span className="font-bold">
              <span className="gradient-text">raj@desai</span>
              <span className="text-[var(--text-secondary)]">:~$</span>
            </span>
          </a>

          {/* Centered Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`group relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 terminal-btn ${
                    isActive
                      ? "text-[var(--text-primary)] font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]"
                  }`}
                >
                  <span className="terminal-prompt-prefix text-[var(--accent-from)] font-mono text-xs mr-0.5 select-none font-bold">❯</span>
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-full -z-10 bg-gradient-to-r from-[var(--accent-from)]/20 via-[var(--accent-via)]/20 to-[var(--accent-to)]/20 border border-[var(--accent-from)]/50 shadow-sm"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2.5">
            {/* Terminal Status Tag */}
            <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-3 py-1.5 rounded-full select-none shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>bash</span>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface)] border border-[var(--border)] transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-[var(--border)] flex flex-col gap-1 text-center">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
                    isActive
                      ? "text-[var(--text-primary)] font-semibold bg-[var(--accent-tint)] border border-[var(--accent-from)]/40"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}

