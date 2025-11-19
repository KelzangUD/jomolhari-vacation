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
      className="p-5 md:p-10 xl:p-15 2xl:p-20 bg-black/60 bg-cover bg-center bg-[url('/header.jpg')] bg-scroll bg-blend-overlay"
    >
      <div className="flex flex-col justify-center items-center h-[inherit] gap-6 xl:gap-8 mt-15">
        <span
          className="flex flex-col gap-6 md:gap-8 items-center my-8"
          ref={titleRef}
        >
          <span className="relative w-14 md:w-25 h-14 md:h-25">
            <Image
              src="./logo.svg"
              alt="logo"
              fill
              className="object-contain"
            />
          </span>
          <h1 className="text-white font-bold flex items-center gap-4 text-4xl xl:mt-0 xl:leading-18 lg:text-6xl xl:text-7xl">
            Jomolhari Vacation
          </h1>
          <h4 className="text-white -mt-6">
            <q>
              Experience the life of Highlanders in all Seasons with Reasons
            </q>
          </h4>
        </span>
        <p
          ref={subtitleRef}
          className="2xl:text-2xl xl:leading-8 2xl:leading-9 max-w-2xl tracking-wide text-center text-gray-300 pb-50"
        >
          From alpine meadows to nomadic camps,
          <b className="text-white">Jomolhari Vacation</b> brings you closer to{" "}
          <b className="text-white">Bhutan’s</b> wild beauty with expert guides
          and seamless planning.
        </p>
      </div>
    </section>
  );
}
