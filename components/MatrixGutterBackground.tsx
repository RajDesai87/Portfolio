"use client";

import { useEffect, useRef } from "react";

export default function MatrixGutterBackground() {
  const canvasLeftRef = useRef<HTMLCanvasElement | null>(null);
  const canvasRightRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const words = ["0", "1", "λ", "$", "async", "def", "class", "import", "return", "postgres", "redis", "celery", "fastapi", "django", "rag", "faiss"];

    const initCanvas = (canvas: HTMLCanvasElement) => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return () => {};

      let width = (canvas.width = canvas.offsetWidth);
      let height = (canvas.height = canvas.offsetHeight);

      const fontSize = 11;
      const columns = Math.max(1, Math.floor(width / 24));
      const drops: number[] = Array.from({ length: columns }, () => Math.floor(Math.random() * -20));

      let animationFrameId: number;
      let lastFrameTime = performance.now();
      const fpsInterval = 1000 / 22; // Throttle to 22 FPS for lightweight CPU/GPU

      const handleResize = () => {
        if (!canvas) return;
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
      };

      window.addEventListener("resize", handleResize);

      const draw = (currentTime: number) => {
        animationFrameId = requestAnimationFrame(draw);

        if (document.hidden) return; // Pause when tab is not active

        const elapsed = currentTime - lastFrameTime;
        if (elapsed < fpsInterval) return;
        lastFrameTime = currentTime - (elapsed % fpsInterval);

        // Fade previous frame
        ctx.fillStyle = "rgba(8, 9, 14, 0.12)";
        ctx.fillRect(0, 0, width, height);

        ctx.font = `${fontSize}px var(--font-jetbrains-mono), monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = words[Math.floor(Math.random() * words.length)];
          const x = i * 24 + 6;
          const y = drops[i] * 16;

          // Glowing leading char vs dim trailing chars in Emerald Matrix theme
          if (Math.random() > 0.88) {
            ctx.fillStyle = "rgba(132, 204, 22, 0.6)"; // Electric Lime tip
          } else if (Math.random() > 0.5) {
            ctx.fillStyle = "rgba(16, 185, 129, 0.38)"; // Neon Mint
          } else {
            ctx.fillStyle = "rgba(6, 182, 212, 0.2)"; // Cyber Teal stream
          }

          ctx.fillText(text, x, y);

          if (y > height && Math.random() > 0.97) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      };

      animationFrameId = requestAnimationFrame(draw);

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", handleResize);
      };
    };

    const cleanupLeft = canvasLeftRef.current ? initCanvas(canvasLeftRef.current) : () => {};
    const cleanupRight = canvasRightRef.current ? initCanvas(canvasRightRef.current) : () => {};

    return () => {
      cleanupLeft();
      cleanupRight();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="hidden xl:block pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Left Gutter Canvas */}
      <div className="absolute left-0 top-0 bottom-0 w-64 lg:w-72 2xl:w-80 gutter-canvas-container">
        <canvas ref={canvasLeftRef} className="w-full h-full" />
      </div>

      {/* Right Gutter Canvas */}
      <div className="absolute right-0 top-0 bottom-0 w-64 lg:w-72 2xl:w-80 gutter-canvas-container">
        <canvas ref={canvasRightRef} className="w-full h-full" />
      </div>
    </div>
  );
}
