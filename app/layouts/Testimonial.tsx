"use client";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import starIcon from "@/public/star.svg";
import { testimonialData } from "../data/testimonialData";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  testimonial: string;
  name: string;
  type: string;
  review: string;
}

interface Props {
  testimonialData: Testimonial[];
}

type TestimonialCardProps = {
  testimonial: string;
  name: string;
  type: string;
  review: number;
};


const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  name,
  type,
  review,
}) => {
  return (
    <section className="rounded-md md:rounded-2xl border border-border flex flex-col justify-between p-4 lg:p-6">
      <div>
        <div className="relative w-5 h-5 lg:w-7 lg:h-7 2xl:w-10 2xl:h-10">
          <Image
            src="/quote-right.svg"
            alt="title"
            fill
            className="object-cover"
          />
        </div>
        <p className="my-2 2xl:my-4 text-justify text-xs md:text-sm 2xl:text-xl">
          {testimonial}
        </p>
      </div>
      <div>
        <div className="flex gap-2 mt-5">
          {review > 0 &&
            Array.from({ length: review }, (_, index) => (
              <div
                className="relative w-3 h-3 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6"
                key={"star" + index}
              >
                <Image
                  src={starIcon}
                  alt={"star" + index}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
        </div>
        <p className="my-2 text-sm 2xl:text-xl">
          {name}, <span className="text-secondary">{type}</span>
        </p>
      </div>
    </section>
  );
};

export default function Testimonial() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
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
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialData.length - 1 : prev - 1
    );
  };
  return (
    <div
      ref={sectionRef}
      className="bg-[#fafafb] pt-5 md:py-10 xl:py-15 2xl:py-20"
    >
      <div className="px-5 md:px-10 xl:px-15 2xl:px-20">
        <h4 ref={titleRef}>What our clients say</h4>
        <p ref={subtitleRef} className="my-1 md:my-2 xl:my-4">
          Every trek tells a story—here are a few from those who walked the
          trails with us.
        </p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonialData.map((item) => (
            <div
              key={item.testimonial}
              className="w-full flex-shrink-0 flex justify-center items-center xl:px-2"
            >
              <div className="max-w-[80%] w-full">
                <TestimonialCard
                  testimonial={item.testimonial}
                  name={item.name}
                  type={item.type}
                  review={item.review}
                  key={item.testimonial}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex justify-between items-center mb-6 lg:mb-0 px-2 md:px-4">
          <button
            onClick={handlePrev}
            className={`bg-white/60 hover:bg-white text-black rounded-full px-1 py-0.5 md:px-2 md:py-1 shadow-md backdrop-blur-sm transition-opacity ${
              currentIndex > 0 ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className={`bg-white/60 hover:bg-white text-black rounded-full px-1 py-0.5 md:px-2 md:py-1 shadow-md backdrop-blur-sm transition-opacity ${
              currentIndex < testimonialData.length - 1
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
