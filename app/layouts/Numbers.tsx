"use client";

import Image, { StaticImageData } from "next/image";
import tentIcon from "@/public/tents.svg";
import hikerIcon from "@/public/hiker.svg";
import { motion } from "motion/react";
import CountUp from "../components/CountUp";

type NumberCardProps = {
  icon: StaticImageData;
  title: string;
  number: number;
};

const NumberCard: React.FC<NumberCardProps> = ({ icon, title, number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="bg-white flex justify-between items-center p-3 lg:p-6 rounded-md md:rounded-2xl drop-shadow-sm"
    >
      <div className="text-black">
        <p className="my-1 md:my-2">{title}</p>
        <CountUp
          from={0}
          to={number}
          separator=","
          direction="up"
          duration={0.5}
          className="count-up-text font-bold ml:font-extrabold ml:text-xl xl:text-3xl"
        />
      </div>
      <div className="relative w-6 h-6 xl:w-10 xl:h-10">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-cover" // or object-contain
        />
      </div>
    </motion.div>
  );
};

export default function Numbers() {
  return (
    <section className="p-5 md:p-10 xl:x-15 2xl:p-20 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <h4>Number That Tell Our Story</h4>
        <p className="my-2 lg:my-4">
          250+ treks, 1000+ trekkers, and countless unforgettable moments on the
          trails of Bhutan.
        </p>
      </motion.div>
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
    </section>
  );
}
