"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";
import arrowRightIcon from "@/public/arrow-right.svg";
import jomolhariTrekImage from "@/public/jomolhari trek.png";
import snowManTrek from "@/public/snowman trek.png";
import Card from "../components/Card";
import PrimaryButton from "../ui/PrimaryButton";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturePackage() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 3,
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
      className="z-10 p-5 md:p-10 xl:p-15 2xl:py-20 2xl:px-20 bg-white"
    >
      <h4 ref={titleRef}>Feature Packages</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 my-5 md:my-10">
        <Card
          image={jomolhariTrekImage}
          title="Jomolhari Trek"
          subtitle="3D4N | Nu.10,500/-"
          height="h-50 lg:h-70 xl:h-80"
        />
        <Card
          image={snowManTrek}
          title="Snowman Trek"
          subtitle="25D24N | Nu.100,500/-"
          height="h-50 lg:h-70 xl:h-80"
        />
      </div>
      <div className="">
        <Link href="">
          <PrimaryButton
            text="View All"
            icon={arrowRightIcon}
            style="flex justify-between items-center gap-4"
          />
        </Link>
      </div>
    </div>
  );
}
