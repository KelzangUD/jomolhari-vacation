"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type CardProps = {
  image: StaticImageData;
  title: string;
  subtitle?: string;
  author?: string;
  role?: string;
  height?: string;
  date?: string;
  location?: string;
  difficulty?: string;
  desc?: string;
};

const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  author,
  role,
  height,
  date,
  location,
  difficulty,
  desc,
}) => {
  const cardRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        cardRef.current,
        {
          y: 20,
          opacity: 0.5,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
    { scope: cardRef, revertOnUpdate: true }
  );
  return (
    <div
      ref={cardRef}
      className="relative rounded-2xl overflow-hidden slide-up-fade-in "
    >
      <div className={`w-full relative ${height}`}>
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="absolute top-5 right-5 z-50 cursor-pointer">
        <button className="bg-white text-black rounded-full p-2 cursor-pointer shadow-md hover:scale-105 transition-transform duration-200">
          <Image
            src="/arrow-up-right.svg"
            alt="arrow-up-right"
            width={15}
            height={15}
          />
        </button>
      </div>
      <div className="absolute inset-0 bg-black opacity-40 z-10" />
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-4">
        <h6 className="font-bold text-white lg:text-xl 2xl:text-2xl">
          {title}
        </h6>
        <p className="text-light-secondary lg:text-base 2xl:text-xl">
          {subtitle}
        </p>
        {author && role && (
          <p className="text-light-secondary lg:text-base 2xl:text-xl">{`${author} | ${role}`}</p>
        )}
        <p className="text-light-secondary lg:text-base 2xl:text-xl mb-3 xl:mb-4">
          {date}
        </p>
        <p className="text-light-secondary lg:text-base 2xl:text-xl">
          {location}
        </p>
        <p className="text-light-secondary lg:text-base 2xl:text-xl">
          {difficulty}
        </p>
        <p className="hidden xl:block text-light-secondary lg:text-base 2xl:text-xl">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Card;
