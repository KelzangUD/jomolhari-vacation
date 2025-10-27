"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image, { StaticImageData } from "next/image";
import tentIcon from "@/public/tents.svg";
import hikerIcon from "@/public/hiker.svg";

type NumberCardProps = {
  icon: StaticImageData;
  title: string;
  number: number;
};

gsap.registerPlugin(ScrollTrigger);

const NumberCard: React.FC<NumberCardProps> = ({ icon, title, number }) => {
    const numberRef = useRef<HTMLSpanElement | null>(null);
  const containerRef = useRef(null);
  useGSAP(
    () => {
      if (!numberRef.current) return;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: number,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        onUpdate: function () {
          if (numberRef.current) {
            // Format number with commas for thousands
            const formattedNumber = Math.floor(obj.val).toLocaleString();
            numberRef.current.textContent = formattedNumber;
          }
        },
      });
    },
    { scope: containerRef, dependencies: [number] }
  );
  return (
    <div ref={containerRef} className="bg-white flex justify-between items-center p-3 lg:p-6 rounded-2xl drop-shadow-sm">
      <div className="text-black">
        <p className="my-1 md:my-2">{title}</p>
        <span  ref={numberRef} className="font-bold ml:font-extrabold ml:text-xl">{number}</span>
      </div>
      <div className="relative w-6 h-6 xl:w-10 xl:h-10">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-cover" // or object-contain
        />
      </div>
    </div>
  );
};

export default function Numbers() {
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
    },
    { scope: sectionRef, revertOnUpdate: true }
  );
  return (
    <div
      ref={sectionRef}
      className="p-5 md:p-10 xl:x-15 2xl:p-20 bg-black text-white"
    >
      <h4 ref={titleRef}>Number That Tell Our Story</h4>
      <p ref={subtitleRef} className="my-2 lg:my-4">
        250+ treks, 1000+ trekkers, and countless unforgettable moments on the
        trails of Bhutan.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-4 xl:mt-6">
        <NumberCard
          icon={tentIcon}
          title="Treks/Hikes Organized"
          number={250}
        />
        <NumberCard
          icon={hikerIcon}
          title="Happy Trekkers/Hikers"
          number={1000}
        />
      </div>
    </div>
  );
}
