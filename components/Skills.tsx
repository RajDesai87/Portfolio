"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Code2, LayoutGrid, Copy, Check, Binary, Server, Database, Cpu, Globe, Wrench, Layers } from "lucide-react";

interface JsonEntry {
  key: string;
  categoryName: string;
  icon: typeof Server;
  color: string;
  items: string[];
}

const stackData: JsonEntry[] = [
  {
    key: "languages",
    categoryName: "Languages",
    icon: Binary,
    color: "text-teal-400 bg-teal-500/10 border-teal-500/30",
    items: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    key: "backend",
    categoryName: "Backend & REST APIs",
    icon: Server,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    items: [
      "Django",
      "Django REST Framework",
      "Flask",
      "FastAPI",
      "REST APIs",
      "Celery",
    ],
  },
  {
    key: "databases",
    categoryName: "Databases & Caching",
    icon: Database,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis"],
  },
  {
    key: "ai_ml",
    categoryName: "AI, ML & Vector RAG",
    icon: Cpu,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    items: [
      "scikit-learn",
      "XGBoost",
      "FAISS",
      "sentence-transformers",
      "Groq/LLM APIs",
    ],
  },
  {
    key: "frontend",
    categoryName: "Frontend & UI",
    icon: Globe,
    color: "text-sky-400 bg-sky-500/10 border-sky-500/30",
    items: ["React", "HTML", "CSS", "Tailwind CSS", "Vite"],
  },
  {
    key: "tools",
    categoryName: "Tools & DevOps",
    icon: Wrench,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    items: ["Git", "GitHub", "Docker", "Postman"],
  },
  {
    key: "core",
    categoryName: "Core Computer Science",
    icon: Layers,
    color: "text-rose-400 bg-rose-500/10 border-rose-500/30",
    items: [
      "Data Structures",
      "OOP",
      "DBMS",
      "API Design",
      "Software Engineering",
    ],
  },
];

const containerAnimation: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const lineFade: Variants = {
  hidden: { opacity: 0, x: -6 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Skills() {
  const [viewMode, setViewMode] = useState<"json" | "visual">("json");
  const [copied, setCopied] = useState(false);

  const rawJsonString = JSON.stringify(
    stackData.reduce((acc, cur) => ({ ...acc, [cur.key]: cur.items }), {}),
    null,
    2
  );

  const handleCopyJson = async () => {
    try {
      await navigator.clipboard.writeText(rawJsonString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="skills" className="w-full py-32 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[var(--surface)] relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Centered Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center space-y-3.5 mb-10"
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs sm:text-sm text-[var(--accent-from)] font-semibold bg-[var(--accent-from)]/10 border border-[var(--accent-from)]/25 px-4 py-1.5 rounded-full">
              $ cat stack.json
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-[var(--text-secondary)] text-base sm:text-xl max-w-xl font-normal leading-relaxed text-center">
            Core technologies, databases, frameworks, and developer tools in my daily workflow.
          </p>
        </motion.div>

        {/* Centered View Mode Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[var(--bg)] p-2 rounded-2xl border border-[var(--border)] shadow-sm">
            <button
              type="button"
              onClick={() => setViewMode("json")}
              className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-mono transition-all cursor-pointer ${
                viewMode === "json"
                  ? "bg-[var(--surface)] text-[var(--accent-from)] font-bold shadow-sm border border-[var(--border)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium"
              }`}
            >
              <Code2 size={16} />
              <span>stack.json</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("visual")}
              className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-mono transition-all cursor-pointer ${
                viewMode === "visual"
                  ? "bg-[var(--surface)] text-[var(--accent-from)] font-bold shadow-sm border border-[var(--border)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium"
              }`}
            >
              <LayoutGrid size={16} />
              <span>Visual Grid</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Syntax Highlighted JSON Code Block */}
        {viewMode === "json" && (
          <motion.div
            className="w-full max-w-3xl mx-auto bg-[var(--bg)] border border-[var(--border)] rounded-3xl overflow-hidden shadow-2xl text-left"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between px-7 py-4.5 border-b border-[var(--border)] bg-[var(--surface)]">
              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#ef4444]/80 inline-block" aria-hidden="true" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#eab308]/80 inline-block" aria-hidden="true" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#22c55e]/80 inline-block" aria-hidden="true" />
                <span className="font-mono text-sm text-[var(--text-secondary)] ml-3 font-semibold">
                  stack.json
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyJson}
                className="terminal-btn group inline-flex items-center gap-2 font-mono text-xs sm:text-sm px-4 py-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-from)] transition-colors cursor-pointer"
                aria-label="Copy JSON code"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-green-500" />
                    <span className="text-green-500 font-semibold">Copied JSON</span>
                  </>
                ) : (
                  <>
                    <span className="terminal-prompt-prefix text-[var(--accent-from)] font-bold">❯</span>
                    <Copy size={14} />
                    <span>Copy JSON</span>
                    <span className="terminal-cursor-indicator text-[var(--accent-from)] font-bold">▍</span>
                  </>
                )}
              </button>
            </div>

            {/* Syntax Highlighted JSON Code Body */}
            <motion.div
              className="p-8 sm:p-10 font-mono text-sm leading-relaxed sm:leading-8 overflow-x-auto"
              variants={containerAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              aria-label="Technical stack displayed as JSON code block"
            >
              <motion.div variants={lineFade} className="text-[var(--text-muted)] flex items-center gap-4">
                <span className="text-[var(--text-muted)]/40 select-none w-6 text-right">1</span>
                <span className="text-[var(--text-secondary)] font-bold">&#123;</span>
              </motion.div>

              {stackData.map((row, idx) => {
                const isLast = idx === stackData.length - 1;
                const lineNumber = idx + 2;
                return (
                  <motion.div
                    key={row.key}
                    variants={lineFade}
                    className="flex items-start gap-4 py-1 hover:bg-[var(--surface)]/50 px-2 rounded-lg transition-colors whitespace-pre"
                  >
                    <span className="text-[var(--text-muted)]/40 select-none w-6 text-right flex-shrink-0">
                      {lineNumber}
                    </span>
                    <div className="flex-1">
                      <span className="json-key font-bold">&quot;{row.key}&quot;</span>
                      <span className="json-bracket">: [</span>
                      {row.items.map((item, itemIdx) => {
                        const isLastItem = itemIdx === row.items.length - 1;
                        return (
                          <span key={item}>
                            <span className="json-string font-medium">&quot;{item}&quot;</span>
                            {!isLastItem && <span className="json-bracket">, </span>}
                          </span>
                        );
                      })}
                      <span className="json-bracket">]</span>
                      {!isLast && <span className="json-bracket">,</span>}
                    </div>
                  </motion.div>
                );
              })}

              <motion.div variants={lineFade} className="text-[var(--text-muted)] flex items-center gap-4">
                <span className="text-[var(--text-muted)]/40 select-none w-6 text-right">{stackData.length + 2}</span>
                <span className="text-[var(--text-secondary)] font-bold">&#125;</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* View Mode 2: Visual Grid Cards */}
        {viewMode === "visual" && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
          >
            {stackData.map((category) => {
              const IconComp = category.icon;
              return (
                <div
                  key={category.key}
                  className="card-interactive glass-panel rounded-3xl p-7 sm:p-8 border border-[var(--border)] hover:border-[var(--accent-from)]/50 transition-all flex flex-col justify-between shadow-sm space-y-5"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center shadow-xs flex-shrink-0 ${category.color}`}>
                        <IconComp size={21} />
                      </div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-[var(--text-primary)]">
                        {category.categoryName}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {category.items.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs sm:text-sm px-3.5 py-1.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text-primary)] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border)]/60 font-mono text-xs text-[var(--text-muted)]">
                    {category.items.length} tools
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

      </div>
    </section>
  );
}
