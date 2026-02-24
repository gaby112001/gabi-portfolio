"use client";

"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    // Movimiento suave con lerp
    let x = 0,
      y = 0;
    let tx = 0,
      ty = 0;
    let raf = 0;

    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      root.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    // Hover GLOBAL en todos los <a> y <button>
    const onPointerOver = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest("a, button")) {
        root.classList.add("is-hover");
      }
    };

    const onPointerOut = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest("a, button")) {
        root.classList.remove("is-hover");
      }
    };

    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);

    // Click pop
    const onDown = () => root.classList.add("is-down");
    const onUp = () => root.classList.remove("is-down");

    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);

      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);

      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="cursor-root pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      aria-hidden="true"
    >
      
      {/* ICONO BASE */}
      <svg
        className="cursor-icon cursor-icon--base"
        width="26"
        height="26"
        viewBox="0 0 157.37 156.77"
      >
        <path
          d="M78.69,35.72c0-67.13,84.44-25.93,25,12.21C163.13,9.79,184,102.35,109.9,75.37c74.08,27,15.65,101.21-17.32,22,33,79.21-60.75,79.21-27.78,0-33,79.21-91.41,5-17.32-22-74.09,27-53.23-65.58,6.18-27.44C-5.75,9.79,78.69-31.41,78.69,35.72Z"
          fill="currentColor"
        />
      </svg>

      {/* ICONO HOVER */}
      <svg
        className="cursor-icon cursor-icon--hover"
        width="26"
        height="26"
        viewBox="0 0 162.72 167.53"
      >
        <path
          d="M120.31,92.7c21.2,1.74,25.89,13.89,26.61,23.25.92,12.07-7,28.53-19.93,30.39-10.19,1.46-18.45-8.57-24.69-27.61,5.26,16,4.93,31.08,2,40.22-5.74,17.67-21.28,19.18-25.32,2.82-2-7.9-1.28-18.54,4.57-36.23-6.84,20.7-21.24,25.44-31.24,27.3-15.42,2.88-32.09-8.8-28.81-24,2.13-9.87,15.76-16.24,36.73-22.55-19.31,5.81-36,4.57-45.23.37C-2.38,98.77.08,80.23,17.77,75.34c9.29-2.58,21.13-1.52,40.07,7.09-19-8.62-25.09-23.27-29.62-32.31-8.7-17.34,3-32.29,20.54-23.93,9.15,4.37,21,16.25,30,35C69.12,41,63.69,25.87,68.82,16.35,77.29.66,98.25,3,106.55,18.18c5,9.09,11.39,23.72,1.84,44.56,8.38-18.29,15.6-27.38,22.66-32.25,14.84-10.21,25.09,2.91,16.62,21.34-4.39,9.56-18.2,15.85-33.69,24.64,14.73-8.36,28.51-11.64,37.16-11.3,17.79.72,19.83,15.34,4.12,23.2C147.7,92.15,137.43,94.11,120.31,92.7Z"
          transform="translate(-3.15 -5.64)"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}