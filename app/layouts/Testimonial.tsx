"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import starIcon from "@/public/star.svg";

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

const testimonialData = [
  {
    testimonial:
      "Thank you for the amazing adventure Jomolhari Vacation. Throughly enjoyed the professionalism of the team that you have assembled. Wishing you the best of the days for your continuous success in your endeavour. Regards.",
    name: "Kelzang",
    type: "Traveler",
    review: 5,
  },
  {
    testimonial:
      "Perfect team for the perfect getaway … thank you all for the wonderful 4 days.",
    name: "Sakura",
    type: "Traveler",
    review: 5,
  },
  {
    testimonial:
      "As a kid I used to look up in the sky and wish for things like stars, moon and wish to fly up the mountains. And now as an sdult, I am living my dreams.I was standing at the base of Jomolhari and Jichu Drakey - appreciating the majestic panoramic view and I know 'Everything worthwhile is uphill' Sometimes, nature is all you need - walk into it to see 1000 miracles",
    name: "Radhikaa",
    type: "Traveler",
    review: 5,
  },
];

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  name,
  type,
  review,
}) => {
  return (
    <div className="rounded-2xl border border-border flex flex-col justify-between p-2 md:p-4 lg:p-6 2xl:p-8">
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
              <div className="relative w-3 h-3 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6">
                <Image
                  key={"star" + index}
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
    </div>
  );
};

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialData.length - 1 : prev - 1
    );
  };
  return (
    <div className="bg-white xl:py-30">
      <div className="p-5 md:p-10 xl:px-15 2xl:px-20">
        <h4>What our clients say</h4>
        <p className="my-1 md:my-2 xl:my-4">
          Every trek tells a story—here are a few from those who walked the
          trails with us.
        </p>
      </div>
      <div className="relative w-full overflow-hidden pb-10 xl:py-6">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonialData.map((item) => (
            <div
              key={item.testimonial}
              className="w-full flex-shrink-0 flex justify-center items-center xl:px-4"
            >
              <div className="max-w-[80%] w-full">
                <TestimonialCard
                  testimonial={item.testimonial}
                  name={item.name}
                  type={item.type}
                  review={item.review}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex justify-between items-center mb-6 lg:mb-0 px-2 md:px-4">
          <button
            onClick={handlePrev}
            className={`bg-white/60 hover:bg-white text-black rounded-full p-1 md:p-2 shadow-md backdrop-blur-sm transition-opacity ${
              currentIndex > 0 ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className={`bg-white/60 hover:bg-white text-black rounded-full p-1 md:p-2 shadow-md backdrop-blur-sm transition-opacity ${
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
