"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="font-mono text-xs px-2.5 py-1 rounded border border-[var(--border)] text-[var(--text-secondary)] opacity-0 pointer-events-none"
        aria-label="Toggle theme"
      >
        [ dark ]
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="font-mono text-xs px-2.5 py-1 rounded border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-from)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 select-none"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? "[ light ]" : "[ dark ]"}
    </button>
  );
}
