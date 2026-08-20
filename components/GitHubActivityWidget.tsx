"use client";

import { useEffect, useState } from "react";
import { GitCommit, GitPullRequest, ExternalLink, Activity, Sparkles } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ActivityItem {
  id: string;
  repo: string;
  message: string;
  time: string;
  sha: string;
}

const FALLBACK_ACTIVITY: ActivityItem[] = [
  {
    id: "1",
    repo: "stock-rag-dashboard",
    message: "fix: resolve data-leakage in sentiment feature",
    time: "recently",
    sha: "a91b42c",
  },
  {
    id: "2",
    repo: "Mind-Compass-AI",
    message: "feat: add celery redis async queue & ML pipeline",
    time: "recently",
    sha: "3e89f10",
  },
  {
    id: "3",
    repo: "Discussion-Den",
    message: "feat: 3-tier blueprint architecture & oauth",
    time: "recently",
    sha: "b4528cd",
  },
];

export default function GitHubActivityWidget() {
  const [activities, setActivities] = useState<ActivityItem[]>(FALLBACK_ACTIVITY);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchGitHubActivity = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://api.github.com/users/RajDesai87/events/public?per_page=5");
        if (!res.ok) throw new Error("GitHub API limit");
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0 && isMounted) {
          const pushEvents = data
            .filter((e: any) => e.type === "PushEvent" && e.payload?.commits?.length > 0)
            .slice(0, 3)
            .map((e: any, idx: number) => {
              const commit = e.payload.commits[e.payload.commits.length - 1];
              const repoName = e.repo?.name ? e.repo.name.replace("RajDesai87/", "") : "portfolio";
              const timeAgo = new Date(e.created_at).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              });
              return {
                id: e.id || String(idx),
                repo: repoName,
                message: commit.message.split("\n")[0].slice(0, 45),
                time: timeAgo,
                sha: commit.sha ? commit.sha.slice(0, 7) : "commit",
              };
            });

          if (pushEvents.length > 0) {
            setActivities(pushEvents);
          }
        }
      } catch {
        // Retain fallback data gracefully
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchGitHubActivity();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <aside
      className="hidden xl:flex fixed right-3 2xl:right-6 top-24 z-30 w-56 2xl:w-64 flex-col font-mono text-xs select-none pointer-events-auto"
      aria-label="GitHub Activity Feed"
    >
      <div className="glass-panel rounded-2xl border border-[var(--border)] shadow-xl p-3.5 bg-[var(--surface-glass)]/90 backdrop-blur-xl space-y-3">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-1 pb-2 border-b border-[var(--border)]/70 text-[var(--text-muted)] text-[11px] font-semibold">
          <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
            <Activity size={13} className="text-emerald-400" />
            <span>git log -n 3</span>
          </div>
          <span className="text-[10px] text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            live
          </span>
        </div>

        {/* Activity Items */}
        <div className="space-y-2.5">
          {activities.map((item) => (
            <div
              key={item.id}
              className="p-2 rounded-xl bg-[var(--bg)]/70 border border-[var(--border)]/80 hover:border-[var(--accent-from)]/40 transition-colors space-y-1 group"
            >
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-[var(--accent-from)] font-bold truncate max-w-[130px]">
                  {item.repo}
                </span>
                <span className="text-[var(--text-muted)] text-[9px]">{item.time}</span>
              </div>

              <p className="text-[11px] text-[var(--text-secondary)] line-clamp-2 leading-tight font-sans">
                {item.message}
              </p>

              <div className="flex items-center justify-between pt-0.5 text-[10px] text-[var(--text-muted)]">
                <span className="inline-flex items-center gap-1 text-sky-400/90 font-mono">
                  <GitCommit size={11} />
                  {item.sha}
                </span>
                <span className="text-emerald-400 text-[9px]">pushed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Profile Link */}
        <a
          href="https://github.com/RajDesai87"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost-luminous terminal-btn group w-full flex items-center justify-between px-3 py-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <GithubIcon size={14} className="text-[var(--text-primary)]" />
            <span className="text-[11px] font-semibold">@RajDesai87</span>
          </div>
          <span className="terminal-cursor-indicator text-[var(--accent-via)] font-bold">▍</span>
          <ExternalLink size={12} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)]" />
        </a>
      </div>
    </aside>
  );
}
