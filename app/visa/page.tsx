"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Overview from "./components/Overview";
import VisaFee from "./components/VisaFee";
import Steps from "./components/Steps";
import Apply from "./components/Apply";
import Assistance from "./components/Assistance";

gsap.registerPlugin(ScrollTrigger);

export default function Visa() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const leftCardsRef = useRef(null);
  const rightCardsRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
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
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            toggleActions: "play reverse play reverse",
          },
        }
      );
      gsap.fromTo(
        leftCardsRef.current,
        { x: -10, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftCardsRef.current,
            toggleActions: "play reverse play reverse",
          },
        }
      );
      gsap.fromTo(
        rightCardsRef.current,
        { x: 10, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rightCardsRef.current,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );
  return (
    <div
      ref={sectionRef}
      className="p-5 md:p-10 xl:p-15 2xl:p-20 bg-cover bg-top bg-gray-100 bg-[url('/map.svg')] bg-blend-overlay"
    >
      <h4 ref={titleRef}>
        Bhutan Visa Information
      </h4>
      <p ref={subtitleRef} className="my-2 text-xs md:text-base">
        Your complete guide to visa applications, required documents, and entry
        requirements for your unforgettable journey to Bhutan.
      </p>
      <div className="grid md:grid-cols-6 gap-8 mt-8">
        <div ref={leftCardsRef} className="flex flex-col gap-4 md:col-span-4">
          <Overview />
          <VisaFee />
          <Steps />
        </div>
        <div ref={rightCardsRef} className="flex flex-col gap-4 md:col-span-2">
          <Apply />
          <Assistance />
        </div>
      </div>
    </div>
  );
}
