"use client";

import { motion } from "framer-motion";
import ProjectCard, { ProjectData } from "./ProjectCard";

const projectsList: ProjectData[] = [
  {
    id: "mind-compass-ai",
    title: "Mind Compass AI — AI-Powered Wellness Platform",
    badge: "Full-Stack • Team Project",
    featured: false,
    stack: [
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "Celery",
      "React 19",
      "Vite",
      "JWT Auth",
      "Google OAuth 2.0",
      "Scikit-learn",
      "NLTK / VADER",
      "Gemini & Groq APIs",
    ],
    description: [
      "Full-stack wellness platform with a Django REST Framework backend and React 19 + Vite frontend for mood tracking, journaling, analytics dashboards, and personalized recommendations.",
      "JWT authentication and Google OAuth 2.0, with Celery and Redis handling asynchronous task processing.",
      "Scikit-learn, NLTK/VADER, and Joblib for sentiment-analysis and mood-prediction ML pipelines, plus Gemini and Groq APIs for conversational AI features.",
    ],
    githubUrl: "https://github.com/RajDesai87/Mind-Compass-AI",
    liveUrl: "https://mind-compass-ai-frontend.onrender.com/app",
  },
  {
    id: "discussion-den",
    title: "Discussion-Den — Community Discussion Platform",
    badge: "3-Tier Backend • Group Project",
    featured: false,
    stack: [
      "Python",
      "Flask",
      "SQLAlchemy ORM",
      "PostgreSQL",
      "Flask-Login",
      "Authlib",
      "Flask-Limiter",
      "Bootstrap 5",
      "JavaScript",
    ],
    description: [
      "Flask-based discussion platform with communities, posts, nested comments, voting, saved posts, and search.",
      "Modular Blueprint routing and application-factory structure following a 3-tier architecture.",
      "Google OAuth, session management, CSRF protection, rate limiting, ORM-based database operations, persona/identity-switching backed by PostgreSQL.",
    ],
    githubUrl: "https://github.com/RajDesai87/Discussion-Den",
    liveUrl: "https://disden.vercel.app/feed",
  },
  {
    id: "stock-rag-dashboard",
    title: "Stock Sentiment RAG & ML Prediction Dashboard",
    badge: "Flagship ML & Vector RAG • Solo Project",
    featured: true,
    stack: [
      "Python",
      "scikit-learn",
      "XGBoost",
      "FAISS Vector DB",
      "sentence-transformers",
      "Groq LLM API",
      "yfinance",
      "Streamlit",
    ],
    description: [
      "End-to-end ML + RAG pipeline predicting next-day stock direction across 5 tickers by combining LLM-extracted news sentiment (Groq/Llama) with technical indicators, comparing Logistic Regression, Random Forest, and XGBoost with chronological train/test splitting.",
      "Identified and fixed a data-leakage bug where a synthetic sentiment feature was silently derived from same-day price returns for ~85% of rows.",
      "Retrieval-augmented Q&A assistant using a FAISS vector index over embedded news articles, grounding Groq LLM responses, with retry/backoff and rate-limit handling.",
    ],
    githubUrl: "https://github.com/RajDesai87/stock-rag-dashboard",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-32 sm:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">

        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center space-y-3.5 mb-12 sm:mb-14"
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs sm:text-sm text-[var(--accent-from)] font-semibold bg-[var(--accent-from)]/10 border border-[var(--accent-from)]/25 px-4 py-1.5 rounded-full">
              $ ls projects/
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Projects
          </h2>
          <p className="text-[var(--text-secondary)] text-base sm:text-xl max-w-2xl font-normal leading-relaxed text-center">
            Production-grade systems, full-stack applications, and machine learning pipelines.
          </p>
        </motion.div>

        {/* Projects Grid with Generous Gaps */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-left">
          {projectsList.map((proj, idx) => (
            <ProjectCard key={proj.id} project={proj} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
