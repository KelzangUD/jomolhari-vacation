"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  details?: string;
  link?: string;
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
  link,
}) => {
  const router = useRouter();
  const cardRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        cardRef.current,
        {
          y: 10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 3,
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
    <button
      ref={cardRef}
      className="relative rounded-md md:rounded-2xl overflow-hidden group hover:cursor-pointer"
      onClick={() => {
        link ? router.push(link) : null;
      }}
    >
      {/* Image wrapper */}
      <div className={`w-full relative ${height}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      {/* Floating button */}
      {link !== undefined && (
        <div className="absolute top-5 right-5 z-50">
          <Link href={link} className="hover:cursor-pointer">
            <div className="bg-white text-black rounded-full p-2 shadow-md hover:scale-115 transition-transform duration-200 hover:cursor-pointer">
              <Image
                src="/arrow-up-right.svg"
                alt="arrow-up-right"
                width={15}
                height={15}
              />
            </div>
          </Link>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10" />
      {/* Text content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-4">
        <h6 className="font-bold text-white lg:text-xl 2xl:text-2xl text-left">
          {title}
        </h6>
        <p className="text-light-secondary lg:text-base 2xl:text-xl text-left">
          {subtitle}
        </p>
        {author && role && (
          <p className="text-light-secondary lg:text-base 2xl:text-xl text-left">
            {`${author} | ${role}`}
          </p>
        )}
        <p className="text-light-secondary lg:text-base 2xl:text-xl mb-3 xl:mb-4 text-left">
          {date}
        </p>
        <p className="text-light-secondary lg:text-base 2xl:text-xl text-left">
          {location}
        </p>
        <p className="text-light-secondary lg:text-base 2xl:text-xl text-left">
          {difficulty}
        </p>
        <p className="hidden xl:block text-light-secondary lg:text-base 2xl:text-xl text-left">
          {desc}
        </p>
      </div>
    </button>
  );
};

export default Card;
