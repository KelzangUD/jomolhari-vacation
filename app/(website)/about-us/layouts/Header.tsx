"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
// import Link from "next/link";
// import arrowRightIcon from "@/public/arrow-right.svg";
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
        { y: -10, opacity: 0 },
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
    <div ref={sectionRef} className="p-5 md:p-10 xl:p-15 2xl:p-20 bg-white">
      <div className="flex flex-col justify-center h-[inherit] gap-6 xl:gap-8 mt-15">
        <h1
          ref={titleRef}
          className="font-bold flex items-center gap-4 text-4xl xl:mt-0 xl:leading-18 lg:text-6xl xl:text-7xl"
        >
          <span className="relative w-14 h-14">
            <Image
              src="./logo-blue.svg"
              alt="logo"
              fill
              className="object-contain"
            />
          </span>
          Jomolhari Vacation
        </h1>
        <h4 className="-mt-6">Experience the life of Highlanders in all Seasons with Reasons</h4>
        <p
          ref={subtitleRef}
          className="2xl:text-2xl xl:leading-8 2xl:leading-9 tracking-wide text-justify"
        >
          From alpine meadows to nomadic camps,
          <span className="font-bold">Jomolhari Vacation</span> brings you
          closer to <span className="font-bold">Bhutan’s</span> wild beauty with
          expert guides and seamless planning.
        </p>
      </div>
    </div>
  );
}
