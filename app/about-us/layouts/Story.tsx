"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image, { StaticImageData } from "next/image";
import calenderIcon from "@/public/calendar.svg";
import markerIcon from "@/public/marker.svg";
import trophyIcon from "@/public/trophy.svg";
gsap.registerPlugin(ScrollTrigger);

const TimeLineData = [
  {
    title: "Founded in 2016",
    description:
      "Jomolhari Vacation was established with a passion for sharing the beauty of Bhutan.",
    icon: calenderIcon,
  },
  {
    title: "Expanded Trekking Routes",
    description:
      "We introduced new trekking routes to explore diverse landscape and cultures.",
    icon: markerIcon,
  },
  {
    title: "Received Sustainability Award",
    description:
      "Recognized for our commitment to responsible tourism practices.",
    icon: trophyIcon,
  },
];

const TimeLineItem: React.FC<{
  title: string;
  description: string;
  icon: StaticImageData;
  index: number;
}> = ({ title, description, icon, index }) => {
  return (
    <>
      <div className="flex gap-10">
        <div className="mt-2">
          <div className="relative w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7">
            <Image src={icon} alt={title} fill className="object-contain" />
          </div>
        </div>
        <div>
          <h6>{title}</h6>
          <p className="text-xs md:text-base text-secondary">{description}</p>
        </div>
      </div>
      {index < TimeLineData.length - 1 && (
        <hr className="border-border h-10 rotate-90 transform origin-center w-15 lg:w-9 xl:w-10 2xl:w-15 -translate-x-10 lg:-translate-x-7 lg:-translate-y-3.5 xl:-translate-x-7 2xl:-translate-x-9 -translate-y-2 sm:-translate-y-4 2xl:-translate-y-3" />
      )}
    </>
  );
};

export default function Story() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        titleRef.current,
        { y: 20, opacity: 0 },
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
        timelineRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
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
      className="bg-white/70 bg-cover bg-center bg-[url('/story-bg.jpg')] bg-scroll bg-blend-overlay w-full h-90 lg:h-100 xl:h-120 2xl:h-150 px-5 md:px-10 xl:px-15 2xl:px-20"
    >
      <div className="flex flex-col justify-center gap-2 md:gap-4 lg:gap-6 h-[inherit] xl:gap-8">
        <h4 ref={titleRef}>Our Story</h4>
        <div ref={timelineRef} className="flex flex-col">
          {TimeLineData?.map((item, index) => (
            <TimeLineItem
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
