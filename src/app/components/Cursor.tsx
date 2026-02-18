"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const move = (e: MouseEvent) => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", move);

    // Hover state en links y botones
    const onEnter = () => dot.classList.add("is-hover");
    const onLeave = () => dot.classList.remove("is-hover");

    const targets = Array.from(document.querySelectorAll("a, button"));
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="cursor-dot pointer-events-none fixed left-0 top-0 z-[999] hidden md:block"
      aria-hidden="true"
    />
  );
}
