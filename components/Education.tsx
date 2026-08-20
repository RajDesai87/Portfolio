"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import Certifications from "./Certifications";

export default function Education() {
  return (
    <section id="education" className="w-full py-32 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[var(--surface)] relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Centered Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center space-y-3.5 mb-12 sm:mb-14"
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs sm:text-sm text-[var(--accent-from)] font-semibold bg-[var(--accent-from)]/10 border border-[var(--accent-from)]/25 px-4 py-1.5 rounded-full">
              $ cat education.md
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Education
          </h2>
          <p className="text-[var(--text-secondary)] text-base sm:text-xl max-w-xl font-normal leading-relaxed text-center">
            Academic background, degree program, and verified technical credentials.
          </p>
        </motion.div>

        {/* Degree Card with Generous Internal Padding */}
        <motion.div
          className="w-full max-w-3xl mx-auto card-interactive glass-panel rounded-3xl p-8 sm:p-12 md:p-14 border border-[var(--border-glass)] shadow-2xl relative space-y-8 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-5">
              <div
                className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent-from), var(--accent-to))",
                }}
              >
                <GraduationCap size={32} className="text-[#0B0E14]" aria-hidden="true" />
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs sm:text-sm text-[var(--accent-from)] font-semibold uppercase tracking-wider block">
                  Bachelor of Technology
                </span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] leading-tight">
                  B.Tech in Computer Science Engineering
                </h3>
                <p className="text-[var(--text-secondary)] text-base flex items-center gap-2 pt-1">
                  <MapPin size={16} className="text-[var(--accent-from)] flex-shrink-0" />
                  <span>Lok Jagruti University, Ahmedabad, Gujarat</span>
                </p>
              </div>
            </div>

            {/* Academic Status Spotlight Badge */}
            <div className="flex items-center gap-4 self-start md:self-auto bg-[var(--bg)] px-6 py-4 rounded-2xl border border-[var(--border)] shadow-sm">
              <div>
                <span className="font-mono text-xs text-[var(--text-muted)] block uppercase font-semibold">ACADEMIC STATUS</span>
                <span className="font-display text-2xl font-extrabold text-[var(--text-primary)]">
                  3rd Year <span className="text-sm text-[var(--text-secondary)] font-normal">/ Active</span>
                </span>
              </div>
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 font-bold">
                <CheckCircle2 size={22} />
              </div>
            </div>
          </div>

          {/* Timeline & Semester Status Chips */}
          <div className="pt-6 border-t border-[var(--border)]/70 flex flex-wrap items-center justify-center sm:justify-start gap-3.5 font-mono text-sm">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)]">
              <Calendar size={15} className="text-[var(--accent-from)]" />
              <span>Sep 2024 – Sep 2028</span>
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)]">
              <span>Currently in 5th Semester (3rd Year)</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold">
              <span>Full-Time Degree</span>
            </span>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <Certifications />
      </div>
    </section>
  );
}
