"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";
import Hero from "./Hero";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function ParallaxPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const arrowBtnRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  // Parallax animation
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.fromTo(".sky-layer", { y: 0 }, { y: -200 }, 0)
        .fromTo(".cloud1-layer", { y: 0 }, { y: -200 }, 0)
        .fromTo(".cloud2-layer", { y: 0 }, { y: -200 }, 0)
        .fromTo(".cloud3-layer", { y: 0 }, { y: -200 }, 0)
        .fromTo(".mount-bg-layer", { y: 0 }, { y: -200 }, 0)
        .fromTo(".mount-mg-layer", { y: 0 }, { y: -200 }, 0)
        .fromTo(".mount-fg-layer", { y: 0 }, { y: -200 }, 0)
        .fromTo(".hero-text", { y: 0 }, { y: 100, opacity: 0.5 }, 0);
    },
    { scope: containerRef }
  );

  // Arrow button interactions
  useEffect(() => {
    const arrowBtn = arrowBtnRef.current;
    const arrow = arrowRef.current;

    if (!arrowBtn || !arrow) return;

    const handleMouseEnter = () => {
      gsap.to(arrow, {
        y: 10,
        duration: 0.8,
        ease: "back.inOut(3)",
        overwrite: "auto",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(arrow, {
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const handleClick = () => {
      gsap.to(window, {
        scrollTo: window.innerHeight,
        duration: 1.5,
        ease: "power1.inOut",
      });
    };

    arrowBtn.addEventListener("mouseenter", handleMouseEnter);
    arrowBtn.addEventListener("mouseleave", handleMouseLeave);
    arrowBtn.addEventListener("click", handleClick);

    return () => {
      arrowBtn.removeEventListener("mouseenter", handleMouseEnter);
      arrowBtn.removeEventListener("mouseleave", handleMouseLeave);
      arrowBtn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="relative w-full h-120 sm:h-160 2xl:h-screen overflow-hidden bg-background"
      >
        {/* Sky Layer */}
        <div className="sky-layer absolute inset-0 w-full h-full">
          <Image
            src="/main-sky.jpg"
            alt="Sky"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Background Mountain Layer */}
        <div className="mount-bg-layer absolute inset-0 w-full h-full">
          <Image
            src="/mountBg.webp"
            alt="Background Mountains"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Middle Mountain Layer */}
        <div className="mount-mg-layer absolute inset-0 w-full h-full">
          <Image
            src="/mountMg.png"
            alt="Middle Mountains"
            fill
            className="object-cover"
          />
        </div>

        {/* Cloud 2 Layer */}
        <div className="cloud2-layer absolute inset-0 w-full h-full">
          <Image
            src="/cloud2.webp"
            alt="Cloud 2"
            fill
            className="object-cover"
          />
        </div>

        {/* Foreground Mountain Layer */}
        <div className="mount-fg-layer absolute inset-0 w-full h-full">
          <Image
            src="/mountFg.png"
            alt="Foreground Mountains"
            fill
            className="object-cover"
          />
        </div>

        {/* Cloud 1 Layer */}
        <div className="cloud1-layer absolute inset-0 w-full h-full z-10">
          <Image
            src="/cloud1.png"
            alt="Cloud 1"
            fill
            className="object-cover"
          />
        </div>

        {/* Cloud 3 Layer */}
        <div className="cloud3-layer absolute inset-0 w-full h-full z-10">
          <Image
            src="/cloud3.png"
            alt="Cloud 3"
            fill
            className="object-cover"
          />
        </div>

        {/* Hero Text */}
        <div className="hero-text absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wider mb-8">
            Jomolhari Vacation
          </h1>
        </div>
      </section>
    </>
  );
}
