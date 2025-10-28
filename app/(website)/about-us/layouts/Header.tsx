"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";
import arrowRightIcon from "@/public/arrow-right.svg";
// import PrimaryButton from "../ui/PrimaryButton";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        titleRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
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
          // delay: 0.5,
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
    <div
      ref={sectionRef}
      className="w-full mt-5 lg:mt-20 xl:mt-30 h-70 lg:h-50 xl:h-60 px-5 md:px-10 lg:px-10 xl:px-15 2xl:px-20"
    >
      <div className="flex flex-col justify-center h-[inherit] gap-6 xl:gap-8">
        <h1
          ref={titleRef}
          className="font-bold text-4xl mt-10 xl:mt-0 xl:leading-18 lg:text-6xl xl:text-7xl"
        >
          Jomolhari Vacation<br />
          <span><h4>Experience the life of Highlanders in all Seasons with Reasons</h4></span>
        </h1>
        <p
          ref={subtitleRef}
          className="2xl:text-2xl xl:leading-8 2xl:leading-10 tracking-wide text-justify"
        >
          From alpine meadows to nomadic camps,<span className="font-bold">Jomolhari Vacation</span> brings
          you closer to <span className="font-bold">Bhutan’s</span> wild
          beauty with expert guides and seamless planning.
        </p>
      </div>
    </div>
  );
}
