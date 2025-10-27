"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function CursorFollower() {
  useEffect(() => {
    // Initial position centering
    gsap.set(".flair", { xPercent: -50, yPercent: -50 });

    // Smooth motion using quickTo
    const xTo = gsap.quickTo(".flair", "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(".flair", "y", { duration: 0.6, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="flair pointer-events-none fixed top-0 left-0 z-[9999] w-4 h-4 border border-black/50 rounded-full bg-transparent backdrop-blur-md mix-blend-difference"
    ></div>
  );
}
