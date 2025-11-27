"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { storyData } from "@/app/data/storyData";

const TimeLineItem: React.FC<{
  title: string;
  description: string;
  icon: StaticImageData;
  index: number;
}> = ({ title, description, icon, index }) => {
  return (
    <>
      <motion.div
        initial={{ y: 30, opacity: 0.7 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="flex gap-10"
      >
        <div className="mt-2">
          <div className="relative w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7">
            <Image src={icon} alt={title} fill className="object-contain" />
          </div>
        </div>
        <div>
          <h6>{title}</h6>
          <p className="text-xs md:text-base text-gray-600">{description}</p>
        </div>
      </motion.div>
      {index < storyData.length - 1 && (
        <hr className="border-border h-10 rotate-90 transform origin-center w-15 lg:w-9 xl:w-10 2xl:w-15 -translate-x-10 lg:-translate-x-7 lg:-translate-y-3.5 xl:-translate-x-7 2xl:-translate-x-9 -translate-y-2 sm:-translate-y-4 2xl:-translate-y-3" />
      )}
    </>
  );
};

export default function Story() {
  return (
    <section className="bg-white/70 bg-cover bg-center bg-[url('/story-bg.jpg')] bg-scroll bg-blend-overlay w-full h-90 lg:h-100 xl:h-120 2xl:h-150 px-5 md:px-10 xl:px-15 2xl:px-20">
      <div className="flex flex-col justify-center gap-2 md:gap-4 lg:gap-6 h-[inherit] xl:gap-8">
        <motion.div
          initial={{ y: -30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <h4>Our Story</h4>
        </motion.div>
        <div className="flex flex-col md:mt-10">
          {storyData?.map((item, index) => (
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
    </section>
  );
}
