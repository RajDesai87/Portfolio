"use client";

import { useEffect, useState } from "react";
import { Folder, FolderOpen, FileCode, FileText, ChevronDown, ChevronRight, Terminal } from "lucide-react";

interface TreeItem {
  id: string;
  name: string;
  type: "file" | "folder";
  icon: "md" | "json" | "py" | "sh" | "folder";
  gitStatus?: string;
  children?: { id: string; name: string; icon: "py" }[];
}

const fileTree: TreeItem[] = [
  { id: "home", name: "README.md", type: "file", icon: "md", gitStatus: "✓" },
  { id: "about", name: "about.md", type: "file", icon: "md" },
  { id: "skills", name: "stack.json", type: "file", icon: "json" },
  {
    id: "projects",
    name: "projects/",
    type: "folder",
    icon: "folder",
    children: [
      { id: "project-mind-compass-ai", name: "mind_compass.py", icon: "py" },
      { id: "project-discussion-den", name: "discussion_den.py", icon: "py" },
      { id: "project-stock-rag-dashboard", name: "stock_rag_ml.py", icon: "py" },
    ],
  },
  { id: "education", name: "education.md", type: "file", icon: "md" },
  { id: "contact", name: "contact.sh", type: "file", icon: "sh", gitStatus: "M" },
];

export default function FileTreeSidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeProject, setActiveProject] = useState("");
  const [projectsExpanded, setProjectsExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "education", "contact"];
      
      // Bottom of page detection
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("contact");
        setActiveProject("");
        return;
      }

      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.42) {
            current = id;
          }
        }
      }

      setActiveSection(current);

      if (current === "projects") {
        const projectCards = [
          "project-mind-compass-ai",
          "project-discussion-den",
          "project-stock-rag-dashboard",
        ];
        let currentCard = "";
        for (const pid of projectCards) {
          const pEl = document.getElementById(pid);
          if (pEl) {
            const pRect = pEl.getBoundingClientRect();
            if (pRect.top <= window.innerHeight * 0.6 && pRect.bottom >= 80) {
              currentCard = pid;
              break;
            }
          }
        }
        setActiveProject(currentCard);
      } else {
        setActiveProject("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderIcon = (icon: string, isActive: boolean) => {
    switch (icon) {
      case "md":
        return <FileText size={14} className={isActive ? "text-[var(--accent-from)]" : "text-sky-400"} />;
      case "json":
        return <FileCode size={14} className={isActive ? "text-[var(--accent-from)]" : "text-amber-400"} />;
      case "py":
        return <FileCode size={13} className={isActive ? "text-[var(--accent-from)]" : "text-emerald-400"} />;
      case "sh":
        return <Terminal size={14} className={isActive ? "text-[var(--accent-from)]" : "text-teal-400"} />;
      default:
        return <FileText size={14} className="text-[var(--text-muted)]" />;
    }
  };

  return (
    <aside
      className="hidden xl:flex fixed left-3 2xl:left-6 top-24 z-30 w-52 2xl:w-60 flex-col font-mono text-xs select-none pointer-events-auto"
      aria-label="Workspace File Tree Navigation"
    >
      <div className="glass-panel rounded-2xl border border-[var(--border)] shadow-xl p-3.5 bg-[var(--surface-glass)]/90 backdrop-blur-xl space-y-3">
        {/* Explorer Header */}
        <div className="flex items-center justify-between px-1.5 pb-2 border-b border-[var(--border)]/70 text-[var(--text-muted)] text-[11px] font-semibold tracking-wider uppercase">
          <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
            <FolderOpen size={13} className="text-[var(--accent-from)]" />
            <span>~/raj-portfolio</span>
          </div>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] text-emerald-400">
            git:(main)
          </span>
        </div>

        {/* Tree Items */}
        <nav className="space-y-0.5" aria-label="Section shortcuts">
          {fileTree.map((item) => {
            const isFolder = item.type === "folder";
            const isActive = isFolder ? activeSection === "projects" : activeSection === item.id;

            if (isFolder) {
              return (
                <div key={item.name} className="space-y-0.5">
                  <div
                    className={`w-full flex items-center justify-between px-2 py-1.5 rounded-lg transition-all text-left cursor-pointer group ${
                      isActive
                        ? "bg-[var(--accent-from)]/15 text-[var(--text-primary)] font-semibold border border-[var(--accent-from)]/30"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => handleScrollTo("projects")}
                      className="flex items-center gap-1.5 min-w-0 flex-1 cursor-pointer"
                    >
                      <Folder size={14} className={isActive ? "text-[var(--accent-from)]" : "text-amber-400"} />
                      <span className="truncate">{item.name}</span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setProjectsExpanded((v) => !v);
                      }}
                      className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                      aria-label={projectsExpanded ? "Collapse projects" : "Expand projects"}
                    >
                      {projectsExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                    </button>
                  </div>

                  {/* Subtree Children */}
                  {projectsExpanded && item.children && (
                    <div className="pl-3.5 space-y-0.5 border-l border-[var(--border)]/60 ml-2.5 my-0.5">
                      {item.children.map((child) => {
                        const isChildActive = activeProject === child.id;
                        return (
                          <button
                            key={child.id}
                            type="button"
                            onClick={() => handleScrollTo(child.id)}
                            className={`w-full flex items-center justify-between px-2 py-1 rounded-md text-[11px] transition-all text-left cursor-pointer group ${
                              isChildActive
                                ? "bg-[var(--accent-from)]/20 text-[var(--text-primary)] font-bold border border-[var(--accent-from)]/40"
                                : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]"
                            }`}
                          >
                            <div className="flex items-center gap-1.5 min-w-0">
                              <span className="text-[var(--text-muted)] group-hover:text-[var(--accent-from)]">
                                {isChildActive ? "❯" : "·"}
                              </span>
                              {renderIcon(child.icon, isChildActive)}
                              <span className="truncate">{child.name}</span>
                            </div>
                            {isChildActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-from)] animate-pulse" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleScrollTo(item.id)}
                className={`w-full flex items-center justify-between px-2 py-1.5 rounded-lg transition-all text-left cursor-pointer group ${
                  isActive
                    ? "bg-[var(--accent-from)]/15 text-[var(--text-primary)] font-semibold border border-[var(--accent-from)]/30 shadow-xs"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]"
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-[var(--text-muted)] group-hover:text-[var(--accent-from)] transition-colors">
                    {isActive ? "❯" : "·"}
                  </span>
                  {renderIcon(item.icon, isActive)}
                  <span className="truncate">{item.name}</span>
                </div>

                <div className="flex items-center gap-1">
                  {item.gitStatus && (
                    <span className="text-[10px] text-amber-400 font-bold opacity-75">
                      {item.gitStatus}
                    </span>
                  )}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-from)] animate-pulse" />
                  )}
                </div>
              </button>
            );
          })}
        </nav>

        {/* Quick Shell Hint */}
        <div className="pt-2 border-t border-[var(--border)]/70 flex items-center justify-between text-[10px] text-[var(--text-muted)] px-1">
          <span>tree -L 2</span>
          <span className="text-emerald-400">active: {activeSection}</span>
        </div>
      </div>
    </aside>
  );
}
