"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--border)] py-14 px-4 sm:px-6 lg:px-8 bg-[var(--surface)] relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6">
        
        {/* Logo & System Online Badge */}
        <div className="flex items-center justify-center gap-3">
          <span className="font-mono text-sm font-bold">
            <span className="gradient-text">raj@desai</span>
            <span className="text-[var(--text-secondary)]">:~$</span>
          </span>
          <span className="font-mono text-xs text-emerald-500 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            ● System Online
          </span>
        </div>

        {/* Tech Stack Credit */}
        <p className="text-sm text-[var(--text-secondary)] max-w-md text-center">
          Built with <span className="text-[var(--text-primary)] font-semibold">Next.js 16</span>,{" "}
          <span className="text-[var(--text-primary)] font-semibold">Tailwind CSS</span> &amp;{" "}
          <span className="text-[var(--text-primary)] font-semibold">Framer Motion</span>.
        </p>

        {/* CLI Exit Command */}
        <div className="font-mono text-xs text-[var(--text-muted)] bg-[var(--bg)] px-3.5 py-1.5 rounded-xl border border-[var(--border)] shadow-xs">
          <span className="text-[var(--accent-from)] font-bold">$</span> exit 0 <span className="text-emerald-500">✓</span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <a
            href="https://github.com/RajDesai87"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent-from)] transition-all shadow-xs"
            aria-label="Raj Desai on GitHub (opens in new tab)"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/raj-desai132"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent-from)] transition-all shadow-xs"
            aria-label="Raj Desai on LinkedIn (opens in new tab)"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:rajgpdesai2007@gmail.com"
            className="p-3 rounded-2xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent-from)] transition-all shadow-xs"
            aria-label="Email Raj Desai"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
