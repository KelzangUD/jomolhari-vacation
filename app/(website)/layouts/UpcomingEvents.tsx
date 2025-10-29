"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { StaticImageData } from "next/image";
import highLandImage from "@/public/highland festival.png";
import Card from "../components/Card";

gsap.registerPlugin(ScrollTrigger);

interface EventData {
  image: StaticImageData; // Assuming highLandImage is a string URL
  title: string;
  date: string;
  location: string;
}

const data: EventData[] = [
  {
    image: highLandImage,
    title: "Laya Highland Festival",
    date: "Date: October 23-24, 2025",
    location: "Location: Laya village, Gasa District, Bhutan",
  },
];

export default function UpcomingEvents() {
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
    },
    { scope: sectionRef, revertOnUpdate: true }
  );
  return (
    <>
      {data?.length > 0 && (
        <div
          ref={sectionRef}
          className="p-5 pb-10 md:pb-15 xl:pb-20 2xl:pb-25 md:p-10 xl:p-15 2xl:p-20 bg-light-secondary"
        >
          <h4 ref={titleRef}>Upcoming Events</h4>
          <p ref={subtitleRef} className="mb-4 md:mb-6 2xl:mt-4 ">
            Join our scheduled adventures and cultural festivals in Bhutan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 my-5 md:my-10">
            {data?.map((item) => (
              <Card
                image={item?.image}
                title={item?.title}
                height="h-60 lg:h-80 xl:h-100"
                date={item?.date}
                location={item?.location}
                key={item?.title}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
