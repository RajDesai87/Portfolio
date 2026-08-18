"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award, CheckCircle2 } from "lucide-react";

interface Certificate {
  title: string;
  url: string;
  issuer: string;
  domain: string;
}

const certificatesList: Certificate[] = [
  {
    title: "Inheritance & Data Structures in Java",
    issuer: "Duke University • Coursera",
    domain: "Data Structures & OOP",
    url: "https://www.coursera.org/account/accomplishments/verify/P0XRMBAD6DAH",
  },
  {
    title: "Intro to HTML, CSS & JavaScript",
    issuer: "IBM • Coursera",
    domain: "Web Development",
    url: "https://www.coursera.org/account/accomplishments/verify/BVQYP098A6QN",
  },
  {
    title: "Intro to Java",
    issuer: "LearnQuest • Coursera",
    domain: "Object-Oriented Programming",
    url: "https://www.coursera.org/account/accomplishments/verify/R29KU7L8RJMR",
  },
  {
    title: "Advanced Relational Database and SQL",
    issuer: "Coursera Project Network",
    domain: "Relational DBMS & SQL",
    url: "https://www.coursera.org/account/accomplishments/verify/5CFP79M9XB8S",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    issuer: "IBM • Coursera",
    domain: "Machine Learning & EDA",
    url: "https://www.coursera.org/account/accomplishments/verify/QX3G439XIDF6",
  },
];

export default function Certifications() {
  return (
    <div className="w-full mt-20 sm:mt-24 space-y-10 text-center flex flex-col items-center">
      <div className="flex flex-col items-center space-y-3">
        <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] flex items-center justify-center gap-3">
          <Award size={28} className="text-[var(--accent-from)]" aria-hidden="true" />
          <span>Certifications</span>
        </h3>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl text-center">
          Verified credentials in data structures, relational databases, and machine learning.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left" aria-label="Certifications">
        {certificatesList.map((cert, idx) => (
          <motion.a
            key={cert.url}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-interactive glass-panel rounded-3xl p-7 sm:p-8 border border-[var(--border)] hover:border-[var(--accent-from)]/60 transition-all duration-200 flex flex-col justify-between group shadow-sm space-y-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            aria-label={`${cert.title} verified certificate`}
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-[var(--accent-from)] font-semibold bg-[var(--accent-from)]/10 px-3 py-1 rounded-md">
                  {cert.domain}
                </span>
                <CheckCircle2 size={16} className="text-emerald-500" />
              </div>

              <h4 className="font-display text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-from)] transition-colors leading-snug">
                {cert.title}
              </h4>
              <p className="text-sm text-[var(--text-secondary)]">
                {cert.issuer}
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--border)]/60 flex items-center justify-end font-mono text-xs sm:text-sm text-[var(--accent-via)] font-semibold gap-1.5 terminal-btn">
              <span className="terminal-prompt-prefix font-mono font-bold select-none text-[var(--accent-from)]">❯</span>
              <span>View Credential</span>
              <span className="terminal-cursor-indicator font-mono font-bold select-none text-[var(--accent-from)]">▍</span>
              <ExternalLink size={13} />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
