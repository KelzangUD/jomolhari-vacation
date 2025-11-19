"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Mission() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        titleRef.current,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            toggleActions: "play reverse play reverse",
          },
        }
      );
      gsap.fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
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
      className="p-5 md:p-10 xl:p-15 2xl:p-20  bg-black text-center text-white"
    >
      <h1
        ref={titleRef}
        className="font-bold text-3xl xl:mt-0 xl:leading-18 lg:text-5xl xl:text-6xl"
      >
        Mission
      </h1>
      <h4
        ref={subtitleRef}
        className="text-center font-normal tracking-wide my-8 leading-12 text-gray-300"
      >
        Provide authentic and transformative trekking experiences in the heart
        of the Himalayas. We are committed to sustainable tourism, preserving
        Bhutan’s unique culture and environment, and creating unforgettable
        journeys for our clients.
      </h4>
    </section>
  );
}
