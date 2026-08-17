"use client";

import { motion } from "framer-motion";
import { Server, Database, BrainCircuit, ShieldCheck } from "lucide-react";

const engineeringPillars = [
  {
    icon: Server,
    title: "High-Throughput APIs & Async Tasks",
    accent: "from-teal-500/20 to-emerald-500/20",
    border: "border-teal-500/30",
    iconColor: "text-teal-400 bg-teal-500/10",
    description:
      "Developing resilient RESTful microservices with Django REST Framework, Flask, and FastAPI. Orchestrating background job queues with Celery and Redis.",
  },
  {
    icon: Database,
    title: "Database Architecture & Optimization",
    accent: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-500/30",
    iconColor: "text-blue-400 bg-blue-500/10",
    description:
      "Designing relational schemas across PostgreSQL, MySQL, and SQLite. Leveraging SQLAlchemy ORM, index optimizations, and in-memory Redis caching.",
  },
  {
    icon: BrainCircuit,
    title: "LLM & RAG Pipeline Integration",
    accent: "from-purple-500/20 to-indigo-500/20",
    border: "border-purple-500/30",
    iconColor: "text-purple-400 bg-purple-500/10",
    description:
      "Building Retrieval-Augmented Generation (RAG) workflows using FAISS vector indexing, sentence transformers, Groq LLM APIs, and scikit-learn models.",
  },
  {
    icon: ShieldCheck,
    title: "Authentication & Security",
    accent: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/30",
    iconColor: "text-amber-400 bg-amber-500/10",
    description:
      "Implementing JWT authentication, Google OAuth 2.0, session management, CSRF protection, and token rate-limiting to protect mission-critical endpoints.",
  },
];

export default function About() {
  return (
    <section id="about" className="w-full py-32 sm:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col items-center justify-center text-center">
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
              $ cat about.md
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            About Me
          </h2>
          <p className="text-[var(--text-secondary)] text-base sm:text-xl max-w-2xl font-normal leading-relaxed text-center">
            A solid grounding in Computer Science foundations, coupled with practical experience building distributed backend systems.
          </p>
        </motion.div>

        {/* Narrative Glass Card with Generous Internal Padding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl mx-auto glass-panel rounded-3xl p-8 sm:p-12 md:p-14 border border-[var(--border-glass)] shadow-2xl relative space-y-6 text-left mb-12 sm:mb-16"
        >
          <p className="text-[var(--text-primary)] text-base sm:text-xl leading-relaxed sm:leading-9 font-medium">
            I am a 3rd-year Computer Science Engineering student (GPA 9.07/10) focused on backend development with Python, Django REST Framework, Flask, PostgreSQL, MySQL, Redis, and REST APIs.
          </p>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed sm:leading-8">
            My work revolves around building secure authentication systems (JWT, OAuth 2.0), orchestrating asynchronous task processing queues with Celery, integrating LLM/RAG vector search pipelines, and architecting modular multi-tier backend architectures.
          </p>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed sm:leading-8">
            I possess a strong foundation in Data Structures, OOP, and DBMS, with an emphasis on writing readable, testable, and production-ready code.
          </p>
        </motion.div>

        {/* 4 Core Focus Cards with Generous Spacing and Padding */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 text-left">
          {engineeringPillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: 0.15 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`card-interactive glass-panel rounded-3xl p-8 sm:p-9 border ${pillar.border} relative flex flex-col justify-between group shadow-md space-y-4`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-13 h-13 rounded-2xl border flex items-center justify-center ${pillar.iconColor} shadow-sm group-hover:scale-105 transition-transform flex-shrink-0 p-3`}>
                      <IconComp size={24} />
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] leading-snug">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
