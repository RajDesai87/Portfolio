"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Terminal, ShieldAlert } from "lucide-react";
import { GithubIcon } from "./Icons";

export interface ProjectData {
  id: string;
  title: string;
  badge: string;
  featured?: boolean;
  stack: string[];
  description: string[];
  githubUrl?: string;
  liveUrl?: string;
  diffSnippet?: {
    diffLines: { type: "remove" | "add"; text: string }[];
    caption: string;
  };
}

export default function ProjectCard({
  project,
  index,
}: {
  project: ProjectData;
  index: number;
}) {
  return (
    <motion.article
      className={`card-interactive glass-panel rounded-3xl flex flex-col justify-between transition-all duration-300 relative text-left ${
        project.featured
          ? "md:col-span-2 p-8 sm:p-12 border border-[var(--accent-from)]/40 shadow-2xl space-y-7"
          : "p-8 sm:p-10 border border-[var(--border-glass)] shadow-md space-y-7"
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="space-y-6">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs sm:text-sm text-[var(--accent-from)] font-semibold bg-[var(--accent-from)]/10 border border-[var(--accent-from)]/30 px-3.5 py-1 rounded-full">
            {project.badge}
          </span>

          {project.featured && (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-500 dark:text-amber-400 font-bold shadow-xs">
              <Sparkles size={14} aria-hidden="true" />
              <span>Featured Project</span>
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight leading-snug">
          {project.title}
        </h3>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-2.5 pt-1" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs sm:text-sm px-3.5 py-1.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text-primary)] font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bullet Descriptions with Comfortable Line Height & Spacing */}
        <ul className="space-y-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed pt-2">
          {project.description.map((bullet, bulletIdx) => (
            <li key={bulletIdx} className="flex items-start gap-3.5">
              <span
                className="text-[var(--accent-from)] font-mono text-lg font-bold mt-0.5 select-none"
                aria-hidden="true"
              >
                ›
              </span>
              <span className="leading-relaxed sm:leading-8">{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Terminal Diff for Featured Project */}
        {project.diffSnippet && (
          <div className="pt-3">
            <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg)] shadow-inner">
              <div className="flex items-center justify-between px-6 py-3.5 border-b border-[var(--border)] bg-[var(--surface)] text-xs sm:text-sm font-mono">
                <div className="flex items-center gap-2 text-[var(--text-secondary)] font-medium">
                  <Terminal size={15} className="text-emerald-500" />
                  <span>$ git diff results.md</span>
                </div>
                <span className="text-amber-500 font-semibold bg-amber-500/10 px-3 py-1 rounded text-xs flex items-center gap-1.5">
                  <ShieldAlert size={13} />
                  <span>Honest Evaluation</span>
                </span>
              </div>
              <div className="p-6 sm:p-7 font-mono text-xs sm:text-sm space-y-2.5 overflow-x-auto">
                {project.diffSnippet.diffLines.map((line, lineIdx) => (
                  <div
                    key={lineIdx}
                    className={
                      line.type === "remove" ? "diff-removed" : "diff-added"
                    }
                  >
                    <code>{line.text}</code>
                  </div>
                ))}
              </div>
              <div className="px-6 py-3.5 border-t border-[var(--border)] bg-[var(--surface)]/50">
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] italic">
                  &ldquo;{project.diffSnippet.caption}&rdquo;
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Links */}
      <div className="pt-6 flex flex-wrap items-center justify-start gap-4 border-t border-[var(--border)]/70 mt-6">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-mono text-sm px-5 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-from)] transition-all shadow-xs"
            aria-label={`${project.title} Source Code on GitHub`}
          >
            <GithubIcon size={17} aria-hidden="true" />
            <span>GitHub</span>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-mono text-sm px-5 py-3 rounded-xl text-[#0B0E14] font-semibold transition-all hover:scale-105 active:scale-95 shadow-md shadow-[var(--accent-from)]/20"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-from), var(--accent-via))",
            }}
            aria-label={`${project.title} Live Application`}
          >
            <ExternalLink size={16} aria-hidden="true" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.article>
  );
}
