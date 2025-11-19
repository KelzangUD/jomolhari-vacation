"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ReactOut() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        titleRef.current,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            toggleActions: "play reverse play reverse",
          },
        }
      );
      gsap.fromTo(
        subtitleRef.current,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
    { scope: sectionRef, revertOnUpdate: true }
  );
  return (
    <section
      ref={sectionRef}
      className="relative bg-cover bg-center bg-[url('/contact.png')] w-full h-50 md:h-60 lg:h-70 xl:h-78 2xl:h-80 text-black p-5 md:p-10 xl:px-15 2xl:px-20"
    >
      <div className="absolute inset-0 bg-white opacity-85 z-5" />
      <div className="absolute z-10 flex flex-col justify-center gap-3 md:gap-4 xl:gap-6">
        <h4 ref={titleRef}>
          Reach Out Anytime <br />
          For Adventure Or Info
        </h4>
        <p ref={subtitleRef}>
          Whether you’re planning your next adventure, need more details about
          our services,
          <br /> or just want to chat about travel- don’t hesitate to reach out
        </p>
        <Link href="/contact-us">
          <button className="bg-white py-2 px-6 text-xs md:text-sm 2xl:text-xl rounded-md cursor-pointer shadow-sm">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
}
