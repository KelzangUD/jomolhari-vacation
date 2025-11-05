"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faqData } from "../data/faqData";

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        titleRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
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
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            toggleActions: "play reverse play reverse",
          },
        }
      );
      gsap.fromTo(
        cardRef.current,
        {
          y: 10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );
  return (
    <div ref={sectionRef} className="p-5 md:p-10 xl:p-15 2xl:p-20 bg-gray-100">
      <h4 className="fade-in-delayed">Before You Pack Your Bags...</h4>
      <p ref={subtitleRef} className="text-justify my-2 xl:my-4">
        Find everything you need to know before you start your next adventure.
      </p>
      <div className="gap-4 lg:gap-6 mt-4 lg:mt-10 text-justify">
        {faqData?.map((item, index) => (
          <details
            key={item?.question}
            className="p-8 rounded-md shadow-none bg-background"
          >
            <summary className="text-sm md:text-base lg:text-xl xl:text-xl list-none">
              {index + 1}. {item?.question}
            </summary>
            <hr className="border-gray-200 my-2" />
            <p className="font-normal text-sm md:text-base my-2 text-secondary">
              {item?.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
