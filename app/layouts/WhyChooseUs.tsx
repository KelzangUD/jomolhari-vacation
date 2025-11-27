"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { whyChooseUsData } from "../data/whyChooseUsData";

type CardProps = {
  image: StaticImageData;
  title: string;
  desc: string;
};

const Card: React.FC<CardProps> = ({ image, title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      className="border border-border rounded-md md:rounded-2xl p-3 lg:p-4 xl:p-6 2xl:p-8 text-justify"
    >
      <div className="relative w-4 h-4 lg:w-6 lg:h-6 xl:w-10 xl:h-10">
        <Image
          src={image}
          alt="title"
          fill
          className="object-cover" // or object-contain
        />
      </div>
      <p className="font-bold my-2 lg:my-4">{title}</p>
      <p className="lg:mt-4 text-gray-600 text-xs lg:text-sm 2xl:text-base">
        {desc}
      </p>
    </motion.div>
  );
};

export default function WhyChooseUs() {
  return (
    <section className="p-5 md:p-10 xl:p-15 2xl:p-20 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <h4 className="fade-in-delayed">Why Choose Us?</h4>
        <h2 className="fade-in-delayed lg:mt-5 xl:mt-10">
          Your Journey, Our Expertise
        </h2>
        <p className="text-justify my-2 xl:my-4">
          We are committed to providing exceptional trekking experiences in
          Bhutan, ensuring your adventure is safe, memorable, and respectful of
          the local culture.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-4 lg:mt-10">
        {whyChooseUsData?.map((item) => (
          <Card
            image={item?.image}
            title={item?.title}
            desc={item?.desc}
            key={item?.title}
          />
        ))}
      </div>
    </section>
  );
}
