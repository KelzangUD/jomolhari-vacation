"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";
import arrowRightIcon from "@/public/arrow-right.svg";
import PrimaryButton from "../ui/PrimaryButton";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
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
      className="-mt-60 bg-cover bg-center xl:bg-bottom text-white bg-[url('/hero.png')] w-full h-120 lg:h-150 xl:h-190 2xl:h-200 px-5 md:px-10 lg:px-10 xl:px-15 2xl:px-20"
    >
      <div className="flex flex-col justify-center h-[inherit] gap-6 xl:gap-8">
        <h1
          ref={titleRef}
          className="font-bold text-4xl mt-10 xl:mt-0 xl:leading-18 lg:text-6xl xl:text-7xl"
        >
          Experience Bhutan, <br />
          Beyond Ordinary
        </h1>
        <p
          ref={subtitleRef}
          className="2xl:text-2xl xl:leading-8 2xl:leading-10 tracking-wide"
        >
          From alpine meadows to nomadic camps,
          <br /> <span className="font-bold">Jomolhari Vacation</span> brings
          you closer to <span className="font-bold">Bhutan’s</span> <br /> wild
          beauty with expert guides and seamless <br /> planning.
        </p>
        <Link href="/about-us">
          <PrimaryButton
            text="About Us"
            icon={arrowRightIcon}
            style="flex justify-between items-center gap-4"
          />
        </Link>
      </div>
    </div>
  );
}
