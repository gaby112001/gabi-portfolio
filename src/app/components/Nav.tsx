"use client";

import { useState } from "react";

export default function Nav() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="container-page">
        <div
          onMouseMove={handleMove}
          className="relative mt-4 rounded-2xl border border-gabi-border overflow-hidden"
        >
          {/* GRADIENT BACKGROUND */}
          <div
            className="absolute inset-0 transition-all duration-300"
            style={{
              background: `
                radial-gradient(circle at ${pos.x}% ${pos.y}%,
                  rgba(244,185,66,0.25),
                  rgba(240,138,75,0.18),
                  rgba(83,62,89,0.3)
                )
              `,
            }}
          />

          {/* CONTENT */}
          <div className="relative flex items-center justify-between px-4 py-3 backdrop-blur-md bg-gabi-panel/60">
            <div className="text-sm text-gabi-muted">
              <span className="text-gabi-text font-medium">
                Gabriela Jácome
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <a
                href="https://www.linkedin.com/in/gabrielajacomeortiz/"
                target="_blank"
                className="text-gabi-muted hover:text-gabi-text transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/gaby112001"
                target="_blank"
                className="text-gabi-muted hover:text-gabi-text transition"
              >
                GitHub
              </a>

              <button className="border border-gabi-border rounded-full px-3 py-1 text-xs text-gabi-muted hover:text-gabi-text transition">
                ES / EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
